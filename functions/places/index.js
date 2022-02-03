const { mocks, mockImages } = require("./places.mock");
const url = require("url");

module.exports.placesRequest = (request, response) => {
  const { location } = url.parse(request.url, true).query;

  const places = mocks[location];
  if (places) {
    places.results = places.results.map((restaurant) => {
      restaurant.photos = [
        mockImages[Math.ceil(Math.random() * (mockImages.length - 1))],
      ];

      return restaurant;
    });
  }

  response.json(places);
};
