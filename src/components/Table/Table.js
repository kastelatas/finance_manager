import classNames from "classnames";
import React from "react";

const Table = ({ children, className }) => {
  const clss = classNames("uk-table", {}, className);
  return <table className={clss}>{children}</table>;
};

export default Table;
