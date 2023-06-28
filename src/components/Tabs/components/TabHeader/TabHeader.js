import React from "react";

const TabHeader = ({ children }) => {
  return (
    <ul
      className="uk-tab"
      data-uk-tab="{connect:'#'}"
    >
      {children}
    </ul>
  );
};

export default TabHeader;
