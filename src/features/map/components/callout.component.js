import React from "react";

import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";

export const Callout = ({ restaurant }) => (
  <CompactRestaurantInfo isMap restaurant={restaurant} />
);
