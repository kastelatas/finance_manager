import React from "react";

const TabHeader = () => {
  return (
    <ul
      className="uk-tab"
      data-uk-tab="{connect:'#recentTransaction'}"
    >
      <li className="tabTitle">
        <a>All</a>
      </li>
      <li className="tabTitle">
        <a>Revenue</a>
      </li>
      <li className="tabTitle">
        <a>Expenses</a>
      </li>
    </ul>
  );
};

export default TabHeader;
