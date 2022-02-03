const DEVELOPMENT_HOST = "http://localhost:5001/mealstogo-bb2ea/us-central1";
const PRODUCTION_HOST =
  "https://us-central1-mealstogo-bb2ea.cloudfunctions.net";

export const IS_DEVELOPMENT = process.env.NODE_ENV === "development";
export const HOST = IS_DEVELOPMENT ? DEVELOPMENT_HOST : PRODUCTION_HOST;
