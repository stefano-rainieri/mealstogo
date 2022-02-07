import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../authentication/authentication.context";

export const CART_KEY = "@cart";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);

  const [cart, setCart] = useState([]);
  const [restaurant, setRestaurant] = useState(null);
  const [sum, setSum] = useState(0);

  const add = (item, rst) => {
    if (!restaurant || restaurant.placeId !== rst.placeId) {
      setRestaurant(rst);
      setCart([item]);

      return;
    }

    setCart([...cart, item]);
  };
  const clear = () => {
    setCart([]);
    setRestaurant(null);
  };

  const load = async (uid) => {
    let value = null;
    try {
      value = AsyncStorage.getItem(`${CART_KEY}-${uid}`);
    } catch (err) {
      console.log("Error reading cart data", err);
    }

    if (!value) {
      return;
    }

    const { restaurant: rst, cart: crt } = JSON.parse(value);
    setRestaurant(rst);
    setCart(crt);
  };

  const save = async (rst, crt, uid) => {
    try {
      await AsyncStorage.setItem(
        `${CART_KEY}-${uid}`,
        JSON.stringify({ restaurant: rst, cart: crt })
      );
    } catch (err) {
      console.log("Error writing cart data", err);
    }
  };

  useEffect(() => {
    if (!cart?.length) {
      setSum(0);

      return;
    }

    setSum(
      cart.reduce((acc, { price }) => {
        acc += price;

        return acc;
      }, 0)
    );
  }, [cart]);

  useEffect(() => {
    if (user?.uid) {
      load(user.id).then();
    }
  }, [user]);

  useEffect(() => {
    if (user?.uid) {
      save(restaurant, cart, user.id).then();
    }
  }, [restaurant, cart, user]);

  return (
    <CartContext.Provider
      value={{
        addToCart: add,
        clearCart: clear,
        restaurant,
        cart,
        sum,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
