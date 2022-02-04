import camelize from "camelize";
import { HOST, IS_MOCK } from "../../utils/env";

export const locationRequest = async (searchTerm) => {
  const response = await fetch(
    `${HOST}/geocode?city=${searchTerm}&mock=${IS_MOCK}`
  );

  return response.json();
};

export const locationTransform = (result) => {
  const formatted = camelize(result);
  const { geometry = {} } = formatted.results[0];
  const { lat, lng } = geometry.location;

  return {
    lat,
    lng,
    viewport: geometry.viewport,
  };
};
