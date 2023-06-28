import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import styles from "./PhoneNumberInput.module.scss";

const PhoneNumberInput = ({ value, onChange, placeholder }) => {
  return (
    <PhoneInput
      onChange={onChange}
      value={value}
      inputProps={{
        name: "phone",
        required: true,
        autoFocus: true,
        enablesearch: "true",
      }}
      containerClass={styles.inputContaier}
      inputClass={styles.input}
      dropdownClass={styles.dropdown}
      placeholder={placeholder}
    />
  );
};

PhoneNumberInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default PhoneNumberInput;
