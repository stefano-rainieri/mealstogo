import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authentication.context";

const FAVOURITES_KEY = "@favourites";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [favourites, setFavourites] = useState([]);

  const saveFavourites = async (value, uid) => {
    try {
      await AsyncStorage.setItem(
        `${FAVOURITES_KEY}-${uid}`,
        JSON.stringify(value)
      );
    } catch (err) {
      console.log("Error writing data", err);
    }
  };

  const loadFavourites = async (uid) => {
    try {
      setFavourites(
        JSON.parse(await AsyncStorage.getItem(`${FAVOURITES_KEY}-${uid}`))
      );
    } catch (err) {
      console.log("Error reading data", err);
    }
  };

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    setFavourites(favourites.filter((x) => x.placeId !== restaurant.placeId));
  };

  useEffect(() => {
    if (user) {
      loadFavourites(user.uid).then(() => {});
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      saveFavourites(favourites, user.uid).then(() => {});
    }
  }, [favourites, user]);

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
