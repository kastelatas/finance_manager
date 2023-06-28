import React from "react";
import SVG from "react-inlinesvg";
import { NavLink } from "react-router-dom";
import logOutIcon from "@/assets/Icons/LogOut.svg";
import styles from "./LogOut.module.scss";

export default function LogOut({ onClick }) {
  return (
    <div
      className={styles.logOutButton}
      onClick={onClick}
    >
      <SVG
        src={logOutIcon}
        className={styles.buttonsIcon}
      />
      <p className={styles.logOutText}>Logout</p>
    </div>
  );
}
