import React from "react";
import PropTypes from "prop-types";
import styles from "./PopUpInput.module.scss";

const PopUpInput = ({ title, placeHolder, value, onChange }) => {
  return (
    <div className={styles.container}>
      <p className={styles.intputTite}>{title}</p>
      <input
        type="text"
        className={styles.input}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

PopUpInput.propTypes = {
  title: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PopUpInput;
