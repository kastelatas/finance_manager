import React from "react";
import PropTypes from "prop-types";
import styles from "./PopUpButton.module.scss";

const PopUpButton = ({ text, onClick }) => {
  return (
    <button
      className={styles.popUpButton}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

PopUpButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.string.isRequired,
};

export default PopUpButton;
