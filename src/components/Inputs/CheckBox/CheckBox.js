import React from "react";
import PropTypes from "prop-types";
import styles from "./CheckBox.module.scss";

const CheckBox = ({ checked, onChange, text, id }) => {
  return (
    <>
      <input
        id={id}
        type="checkbox"
        className={styles.checkBox}
        checked={checked}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className={styles.label}
      >
        <p>{text}</p>
      </label>
    </>
  );
};

CheckBox.propTypes = {
  checked: PropTypes.bool.isRequired,
};

export default CheckBox;
