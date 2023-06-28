import React from "react";
import PropTypes from "prop-types";
import SVG from "react-inlinesvg";
import EditIcon from "@/assets/Icons/EditIcon.svg";
import styles from "./AdjustButton.module.scss";

const AdjustButton = ({ text, onClick }) => {
  return (
    <button
      className={styles.adjustButton}
      onClick={onClick}
    >
      {text}
      <SVG
        src={EditIcon}
        className={styles.buttonIcon}
      />
    </button>
  );
};

AdjustButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AdjustButton;
