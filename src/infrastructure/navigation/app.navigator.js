import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { SettingsScreen } from "../../features/restaurants/screens/settings.screen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const screenOptions = ({ route }) => {
  return {
    headerShown: false,
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    tabBarIcon: ({ color, size }) => (
      <Ionicons color={color} name={TAB_ICON[route.name]} size={size} />
    ),
  };
};

export const AppNavigator = () => (
  <Tab.Navigator screenOptions={screenOptions}>
    <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
    <Tab.Screen name="Map" component={MapScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);
