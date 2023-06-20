import React from "react";
import Footer from "../Footer";

const Categories = () => {
  return (
    <div className="b__categories">
      <div className="b__categories-header">Our Main Domains</div>
      <div className="b__category">
        <button className="b__category-btn">Religion</button>
        <button className="b__category-btn">Technology</button>
        <button className="b__category-btn">Education</button>
        <button className="b__category-btn">Business</button>
        <button className="b__category-btn">Science</button>
        <button className="b__category-btn">History</button>
        <button className="b__category-btn">Agriculture</button>
        <button className="b__category-btn">Environment</button>
        <button className="b__category-btn">Politics</button>
      </div>

      <Footer />
    </div>
  );
};

export default Categories;
