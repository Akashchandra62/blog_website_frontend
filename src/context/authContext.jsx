import React, { createContext, useEffect, useState } from "react";
import api from "../api/api.js";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );

  const login = async (inputs) => {
    const res = await api.post("/auth/login", inputs, {
      withCredentials: true,
    });

    setCurrentUser(res.data.data);
  };

  const logout = async (inputs) => {
    const res = await api.post("/auth/logout", {}, { withCredentials: true });

    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
