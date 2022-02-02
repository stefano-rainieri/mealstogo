import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const checkAuthState = (callback = () => null) => {
  onAuthStateChanged(getAuth(), callback);
};

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(getAuth(), email, password);

export const logoutRequest = () => signOut(getAuth());

export const registerRequest = (email, password) =>
  createUserWithEmailAndPassword(getAuth(), email, password);
