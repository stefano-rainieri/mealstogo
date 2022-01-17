import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVOURITES_KEY = "@favourites";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const saveFavourites = async (value) => {
    try {
      await AsyncStorage.setItem(FAVOURITES_KEY, JSON.stringify(value));
    } catch (err) {
      console.log("Error writing data", err);
    }
  };

  const loadFavourites = async () => {
    try {
      setFavourites(JSON.parse(await AsyncStorage.getItem(FAVOURITES_KEY)));
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
    loadFavourites().then(() => {});
  }, []);

  useEffect(() => {
    saveFavourites(favourites).then(() => {});
  }, [favourites]);

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
