import React from "react";

const Loader = ({ error, loading,load }) => {
  return (
    <div className="load">
      {error && <p>{error}</p>}
      {loading && <img src={load} />}
    </div>
  );
};

export default Loader;
