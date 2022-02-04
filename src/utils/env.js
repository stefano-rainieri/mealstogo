import { IS_ANDROID } from "./platform";

const DEVELOPMENT_HOST = "http://localhost:5001/mealstogo-bb2ea/us-central1";
const PRODUCTION_HOST =
  "https://us-central1-mealstogo-bb2ea.cloudfunctions.net";

export const IS_DEVELOPMENT = process.env.NODE_ENV === "development";
export const IS_MOCK = false;
export const HOST =
  !IS_DEVELOPMENT || IS_ANDROID ? PRODUCTION_HOST : DEVELOPMENT_HOST;
