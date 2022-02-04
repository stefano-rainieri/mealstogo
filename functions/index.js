const { Client } = require("@googlemaps/google-maps-services-js");
const { https } = require("firebase-functions");
const { geocodeRequest } = require("./geocode");
const { placesRequest } = require("./places");

const mapsClient = new Client();

module.exports.geocode = https.onRequest((request, response) =>
  geocodeRequest(request, response, mapsClient)
);

module.exports.places = https.onRequest((request, response) =>
  placesRequest(request, response, mapsClient)
);

module.exports.pay = https.onRequest(() => null);
