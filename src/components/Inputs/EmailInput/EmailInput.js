import React from "react";
import PropTypes from "prop-types";
import styles from "./EmaiInput.module.scss";

const EmailInput = ({ placeholder, value, onChange, required }) => {
  return (
    <input
      type="email"
      className={styles.EmailInput}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
    />
  );
};

EmailInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default EmailInput;
