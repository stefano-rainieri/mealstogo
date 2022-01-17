import "react-native-gesture-handler";
import { initializeApp, getApps } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import React, { useState, useEffect } from "react";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import { theme } from "./src/infrastructure/theme";
import { LocationContextProvider } from "./src/services/location/location.context";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { Navigation } from "./src/infrastructure/navigation";
import { FavouritesContextProvider } from "./src/services/favourites/favorites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

if (!getApps().length) {
  initializeApp({
    apiKey: "AIzaSyAZe1Q_ENVPTeCx3msGtXroneT_U3Pz-HA",
    appId: "1:23116477720:web:a2bddf4ba7fa499d155a6d",
    authDomain: "mealstogo-bb2ea.firebaseapp.com",
    projectId: "mealstogo-bb2ea",
    storageBucket: "mealstogo-bb2ea.appspot.com",
    messagingSenderId: "23116477720",
  });
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    signInWithEmailAndPassword(getAuth(), "ste@rai.me", "password").then(
      (user) => {
        setIsAuthenticated(true);
        console.log(user, isAuthenticated, "mario");
      }
    );
  }, []);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
