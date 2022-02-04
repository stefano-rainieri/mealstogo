const { config } = require("firebase-functions");
const url = require("url");
const { locations: locationsMock } = require("./geocode.mock");

module.exports.geocodeRequest = async (request, response, client) => {
  const { city, mock } = url.parse(request.url, true).query;
  if (mock === "true") {
    return response.json(locationsMock[city.toLowerCase()]);
  }

  try {
    const result = await client.geocode({
      params: {
        address: city,
        key: config().google.key,
      },
      timeout: 5000,
    });

    return response.json(result.data);
  } catch (err) {
    console.log(err);
    response.status(400);

    return response.send(err.response.data.error_message);
  }
};
