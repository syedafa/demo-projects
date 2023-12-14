import React from "react";
import "./battleCard.css";
// import "./unknownCard.css";
const UnknowCard = () => {
  return (
    <div className="crd">
      <h1>unknown</h1>
      <img
        src={
          "https://png.pngtree.com/element_pic/16/10/21/277448a877a33e8d0efc778025291c86.jpg"
        }
        alt=""
      />
      <h3>hp:X</h3>
      <h3>attack:X</h3>
      <h3>defence:X</h3>
      <h3>special-attack:X</h3>
      <h3>special-defence:X</h3>
      <h3>speed:X</h3>
    </div>
  );
};

export default UnknowCard;
