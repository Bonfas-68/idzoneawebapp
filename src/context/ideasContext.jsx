import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
export const ContextIdeas = createContext();
export const IdeasContextProvider = ({ children }) => {

  const createIdea = async (user, idea_text) => {
    await axios.post(
      "http://localhost:5000/ideas",
      { user_id: user?.user_id, idea_text },
      {
        headers: { Authorization: `${user.token}` },
      }
    );
    const message = await res.data;
    return message;
  };
//   let user = JSON.parse(localStorage.getItem("user"))
//   const getIdeas = async () => {
//     const res = await axios.post("http://localhost:5000/ideas", {
//       headers: { Authorization: `${user.token}` },
//     });
//     const u = await res.data;
//     setIdeas(u);
//   };
  return (
    <ContextIdeas.Provider value={{ createIdea }}>
      {children}
    </ContextIdeas.Provider>
  );
};
