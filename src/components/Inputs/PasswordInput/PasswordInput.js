import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import SVG from "react-inlinesvg";
import ShowPasswordIcon from "@/assets/Icons/ShowPassword.svg";
import HidePasswordIcon from "@/assets/Icons/HidePassword.svg";
import styles from "./PasswordInput.module.scss";

const PasswordInput = ({ placeholder, value, onChange, required }) => {
  const [inputType, setInputType] = useState("password");
  const [passwordIcon, setPasswordIcon] = useState(ShowPasswordIcon);
  const [activeIconClass, setActiveIconClass] = useState(false);

  const iconClasses = classNames(styles.passwordIcon, {
    [styles.passwordIconActive]: activeIconClass,
  });

  const toggleType = () => {
    if (inputType === "password") {
      setInputType("text");
      setPasswordIcon(HidePasswordIcon);
    } else {
      setInputType("password");
      setPasswordIcon(ShowPasswordIcon);
    }
  };

  return (
    <div
      className={styles.PasswordContainer}
      onFocus={() => setActiveIconClass(!activeIconClass)}
      onBlur={() => setActiveIconClass(!activeIconClass)}
    >
      <input
        type={inputType}
        className={styles.PasswordInput}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required={required}
      />
      <SVG
        src={passwordIcon}
        className={iconClasses}
        onClick={toggleType}
      />
    </div>
  );
};

export default PasswordInput;
