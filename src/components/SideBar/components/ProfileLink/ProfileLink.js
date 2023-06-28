import React from "react";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import PropTypes from "prop-types";
import Dots from "@/assets/Icons/dots.svg";
import styles from "./ProfileLink.module.scss";

export default function ProfileLink(props) {
  const { userName = "", userPhoto } = props;

  return (
    <NavLink
      to={"/settings"}
      className={styles.profileLink}
    >
      <div className={styles.imgWrapper}>
        <img
          src={userPhoto}
          alt=""
        />
      </div>
      <div className={styles.profileText}>
        <p className={styles.userName}>{userName && userName}</p>
        <p className={styles.linkText}>View profile</p>
      </div>
      <SVG src={Dots} />
    </NavLink>
  );
}

ProfileLink.propTypes = {
  userName: PropTypes.string.isRequired,
  userPhoto: PropTypes.string.isRequired,
};
