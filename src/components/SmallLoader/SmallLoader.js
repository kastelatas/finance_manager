import React from "react";
import "./SmallLoader.scss";

const Loader = () => {
  return (
    <div className="smallLoader-overlay">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
