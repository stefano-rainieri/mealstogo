const { config } = require("firebase-functions");
const url = require("url");
const { mocks, addMockImage } = require("./places.mock");

const addGoogleImage = (restaurant) => {
  const ref = restaurant.photos[0].photo_reference;
  if (!ref) {
    restaurant.photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ];

    return restaurant;
  }

  restaurant.photos = [
    `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${ref}&key=${
      config().google.key
    }`,
  ];

  return restaurant;
};

module.exports.placesRequest = async (request, response, client) => {
  const { location, mock } = url.parse(request.url, true).query;

  if (mock === "true") {
    const places = mocks[location];
    if (places) {
      places.results = places.results.map(addMockImage);
    }

    return response.json(places);
  }

  try {
    const result = await client.placesNearby({
      params: {
        location,
        radius: 3000,
        type: "restaurant",
        key: config().google.key,
      },
      timeout: 5000,
    });
    result.data.results = result.data.results.map(addGoogleImage);

    return response.json(result.data);
  } catch (err) {
    response.status(400);

    return response.send(err.response.data.error_message);
  }
};
