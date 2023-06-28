import React from "react";
import PropTypes from "prop-types";
import styles from "./CheckButton.module.scss";

const CheckButton = ({ text, onClick }) => {
  return (
    <button
      className={styles.CheckButton}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

CheckButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CheckButton;
