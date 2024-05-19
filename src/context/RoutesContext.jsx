import React, { createContext, useContext, useState, useEffect } from "react";
import { UserContext } from "./UserContext";

export const RoutesContext = createContext();

const defaultRoutes = [
  { name: "Sign up", path: "/signup" },
  { name: "Log in", path: "/login" },
  { name: "Discover", path: "/discover" },
  { name: "Home", path: "/" },
];
export const RoutesProvider = ({ children }) => {
  const [routes, setRoutes] = useState(defaultRoutes);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      setRoutes([...routes, { name: "Profile", path: "/profile" }]);
    } else {
      setRoutes(defaultRoutes);
    }
  }, [user]);

  return (
    <RoutesContext.Provider value={routes}>{children}</RoutesContext.Provider>
  );
};
