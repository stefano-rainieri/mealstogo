const { Client } = require("@googlemaps/google-maps-services-js");
const { https, config } = require("firebase-functions");
const { geocodeRequest } = require("./geocode");
const { placesRequest } = require("./places");
const { payRequest } = require("./pay");
const stripeClient = require("stripe")(config().stripe.key);
const mapsClient = new Client();

module.exports.geocode = https.onRequest((request, response) =>
  geocodeRequest(request, response, mapsClient)
);

module.exports.places = https.onRequest((request, response) =>
  placesRequest(request, response, mapsClient)
);

module.exports.pay = https.onRequest((request, response) =>
  payRequest(request, response, stripeClient)
);
