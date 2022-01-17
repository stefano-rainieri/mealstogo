import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

export const AccountNavigator = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen name="Main" component={}></Stack.Screen>
    <Stack.Screen name="Login" component={}></Stack.Screen>
  </Stack.Navigator>
);
