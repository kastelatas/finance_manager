import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./BaseTitle.module.scss";

const BaseTitle = ({ text, fontSize, classes }) => {
  const baseTitleClss = classNames(styles.baseTitle, {
    [`${classes}`]: classes,
    [`font${fontSize}`]: fontSize,
  });

  return <p className={baseTitleClss}>{text}</p>;
};

export default BaseTitle;

BaseTitle.propType = {
  text: PropTypes.string.isRequired,
};
