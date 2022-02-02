import "react-native-gesture-handler";
import { initializeApp, getApps } from "firebase/app";
import React from "react";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
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
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
