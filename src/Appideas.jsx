import {useEffect, useState } from "react";
import Ideas from "./components/idea";
import axios from "axios";

const Appideas = ({ myideas,user }) => {
  const username = user.username
  return (
    <div className="b__ideas">
        <Ideas   myideas = {myideas} user={user} />
    </div>
  );
};

export default Appideas;
