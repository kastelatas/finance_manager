import * as React from "react";
import SVG from "react-inlinesvg";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Overview from "@/assets/Icons/Overview.svg";
import Balances from "@/assets/Icons/Balances.svg";
import Transactions from "@/assets/Icons/Transactions.svg";
import Bills from "@/assets/Icons/Bills.svg";
import Expenses from "@/assets/Icons/Expenses.svg";
import Goals from "@/assets/Icons/Goals.svg";
import Settings from "@/assets/Icons/Settings.svg";
import styles from "./SideBarLinks.module.scss";

export default function SideBarLinks(props) {
    const {icon, text, path} = props

    const chooseIcon = icon => {
      switch(icon) {
        case "Overview":
          return Overview;
        case "Balances":
          return Balances;
        case "Transactions":
          return Transactions;  
        case "Bills":
          return Bills;
        case "Expenses":
          return Expenses;
        case "Goals":
          return Goals;
        case "Settings":
          return Settings;
      }
    }
  return (
    <NavLink to={path} className={styles.linkItem} activeclassname="active">
      <div className={styles.linkBox} >
        <SVG 
        src={chooseIcon(icon)}
        className="navLinkIcon"
        />
        <p className={styles.link}>{text}</p>
      </div>
    </NavLink>
  );
}

SideBarLinks.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
