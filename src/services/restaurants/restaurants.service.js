import { mockImages, mocks } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject(404);
    }

    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mapped = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map(
      () => mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]
    );

    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours?.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mapped);
};
