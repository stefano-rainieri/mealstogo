import React, { createContext, useState } from "react";

import {
  checkAuthState,
  loginRequest,
  logoutRequest,
  registerRequest,
} from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  checkAuthState((u) => {
    if (u) {
      setUser(u);
    }

    console.log("[DEBUG] checkAuthState", isLoading);
  });

  const onLogin = async (email, password) => {
    setIsLoading(true);
    console.log("[DEBUG] onLogin", isLoading);
    try {
      setUser(await loginRequest(email, password));
    } catch (err) {
      setError(err.toString());
    } finally {
      setIsLoading(false);
    }
  };

  const onLogout = async () => {
    setIsLoading(true);
    setUser(null);
    try {
      await logoutRequest();
    } finally {
      setIsLoading(false);
    }
  };

  const onRegister = async (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");

      return;
    }

    setIsLoading(true);
    try {
      setUser(await registerRequest(email, password));
    } catch (err) {
      setError(err.toString());
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onLogout,
        onRegister,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
