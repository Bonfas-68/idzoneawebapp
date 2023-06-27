import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const login = async (data) => {
    const res = await axios.post("http://localhost:5000/auth/login", data);
    const u = await res.data
    setUser(u);
  };
  return (
    <Context.Provider value={{ login, user }}>{children}</Context.Provider>
  );
};
