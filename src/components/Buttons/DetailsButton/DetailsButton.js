import React from "react";
import PropTypes from "prop-types";
import RightArrow from "@/assets/Icons/RightArrow.svg";
import SVG from "react-inlinesvg";
import styles from "./DetailsButton.module.scss";

const DetailsButton = ({ text, onClick }) => {
  return (
    <button
      className={styles.DetailsButton}
      onClick={onClick}
    >
      {text}
      <SVG src={RightArrow} />
    </button>
  );
};

DetailsButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DetailsButton;
