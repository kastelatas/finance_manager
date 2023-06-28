import React from "react";
import { Link } from "react-router-dom";
import SVG from "react-inlinesvg";
import styles from "./LinkWithIcon.module.scss";
import classNames from "classnames";

const LinkWithIcon = ({ to, text, icon, fontSize }) => {
  const linkWithIconClss = classNames(styles.linkWithIcon, {
    [`font${fontSize}`]: fontSize,
  });

  return (
    <Link
      to={to}
      className={linkWithIconClss}
    >
      {text}
      <SVG src={icon} />
    </Link>
  );
};

export default LinkWithIcon;
