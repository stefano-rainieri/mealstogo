import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantsStack = createStackNavigator();

const screenOptions = {
  headerShown: false,
  ...TransitionPresets.ModalPresentationIOS,
};

export const RestaurantsNavigator = () => (
  <RestaurantsStack.Navigator screenOptions={screenOptions}>
    <RestaurantsStack.Screen
      name="RestaurantsList"
      component={RestaurantsScreen}
    />
    <RestaurantsStack.Screen
      name="RestaurantDetail"
      component={RestaurantDetailScreen}
    />
  </RestaurantsStack.Navigator>
);
