import React from "react";
import PropTypes from "prop-types";
import SVG from "react-inlinesvg";
import SearchIcon from "@/assets/Icons/SearchIcon.svg";
import styles from "./SearchInput.module.scss";

const SearchInput = ({ placeHolder, vlaue, onChange }) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input}
        placeholder={placeHolder}
      />
      <SVG
        src={SearchIcon}
        className={styles.searchIcon}
      />
    </div>
  );
};

SearchInput.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchInput;
