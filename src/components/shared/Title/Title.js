import React from "react";
import PropTypes from "prop-types";
import styles from "./Title.module.scss";

export const Title = ({ text }) => {
  return (
    <div
      className={styles.container}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
