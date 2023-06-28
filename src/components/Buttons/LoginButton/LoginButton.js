import React from "react";
import PropTypes from "prop-types";
import styles from "./LoginButton.module.scss";

const LoginButton = ({ text, onClick }) => {
  return (
    <button
      className={styles.primaryButton}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

LoginButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LoginButton;
