import React, { createContext, useState } from "react";

import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(false);
  const [error, setError] = useState(false);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((loggedUser) => setUser(loggedUser))
      .catch((loggedError) => setError(loggedError))
      .finally(() => setIsLoading(false));
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
