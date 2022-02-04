import camelize from "camelize";
import { HOST, IS_MOCK } from "../../utils/env";

export const restaurantsRequest = async (location) => {
  const response = await fetch(
    `${HOST}/places?location=${location}&mock=${IS_MOCK}`
  );

  return response.json();
};

export const restaurantsTransform = ({ results = [] }) => {
  const mapped = results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours?.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mapped);
};
