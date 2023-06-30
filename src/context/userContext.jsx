import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { domain } from "../utils/Utils";
export const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [ideas , setIdeas] = useState(
    JSON.parse(localStorage.getItem("ideas")) || null
  );
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  const fetchAllIdeas = async () => {
      const res = await axios.get(`${domain}/ideas`, {
        headers: { Authorization: `${user.token}` },
      });
      const idea = await res.data
      setIdeas(idea);
  };
  

  useEffect(() => {
    fetchAllIdeas();
    localStorage.setItem("ideas", JSON.stringify(ideas));
  }, [ideas]);

  const login = async (data) => {
    const res = await axios.post(`${domain}/auth/login`, data);
    const u = await res.data
    setUser(u);
  };
  return (
    <Context.Provider value={{ login, user, ideas, fetchAllIdeas }}>{children}</Context.Provider>
  );
};
