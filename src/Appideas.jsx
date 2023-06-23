import React, { useEffect, useState } from "react";
import datas from "../roomdata";
import Ideas from "./components/idea";
import AddIdea from "./components/AddIdea";
import axios from "axios";

const Appideas = ({ user }) => {
//   const [data, setData] = useState(datas);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const res = await axios.get("http://localhost:5000/ideas",{
            headers: {"Authorization": `${user.token}`}
        });
        const ideas = await res.data
        // console.log(ideas)
        setData(ideas)
    } catch (error) {
        alert(res.data.error)
    }
};
fetchIdeas()
},[]);
    const myideas = data.map((idea, index)=> idea)
    console.log(myideas)
  const username = user.username
  return (
    <div className="b__ideas">
        <Ideas  myideas = {myideas} username={username} />
      {/* {data.map((idea) => {
        console.log(idea)
        return <Ideas key={idea.idea_id} idea={idea} username={username} />;
      })} */}
    </div>
  );
};

export default Appideas;
