import React from "react";
import PropTypes from "prop-types";
import styles from "./AddAccountsButton.module.scss";

const AddAccountsButton = ({ text, onClick }) => {
  return (
    <button
      className={styles.AddAccountsButton}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

AddAccountsButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AddAccountsButton;
