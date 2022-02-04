const { Client } = require("@googlemaps/google-maps-services-js");
const { https } = require("firebase-functions");
const { geocodeRequest } = require("./geocode");
const { placesRequest } = require("./places");

const mapsClient = new Client();

exports.geocode = https.onRequest((request, response) =>
  geocodeRequest(request, response, mapsClient)
);

exports.places = https.onRequest((request, response) =>
  placesRequest(request, response, mapsClient)
);
