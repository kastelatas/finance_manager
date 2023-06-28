import React from "react";
import PropTypes from "prop-types";
import GoogleIcon from "@/assets/Icons/GoogleIcon.svg";
import SVG from "react-inlinesvg";
import styles from "./GoogleSigiInButton.module.scss";

const GoogleSiginInButton = ({ text, onClick }) => {
  return (
    <button
      className={styles.GoogleSiginInButton}
      onClick={onClick}
    >
      <SVG
        src={GoogleIcon}
        className={styles.ButtonIcon}
      />
      {text}
    </button>
  );
};

GoogleSiginInButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GoogleSiginInButton;
