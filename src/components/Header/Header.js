import React from "react";
import { useSelector } from "react-redux";
import SVG from "react-inlinesvg";
import BaseTitle from "../shared/BaseTitle";
import dateFormater from "@/helpers/dateFormater";
import DoubleRightArrows from "@/assets/Icons/DoubleRightArrows.svg";
import NotificationIcon from "@/assets/Icons/NotificationIcon.svg";
import SearchInput from "../Inputs/SearchInput";
import "./Header.scss";

const Header = () => {
  const { user } = useSelector(state => state.auth);
  return (
    <div className="header">
      <div className="container">
        <div className="left-side">
          {user.fullName && (
            <BaseTitle
              text={`Hello ${user.fullName}`}
              fontSize={"24"}
              classes={"title"}
            />
          )}
          <div className="date">
            <SVG src={DoubleRightArrows} />
            <span>{dateFormater(new Date())}</span>
          </div>
        </div>
        <div className="right-side">
          <div className="notification-wrapper">
            <SVG
              src={NotificationIcon}
              className="notification-icon"
            />
          </div>
          <SearchInput
            placeHolder="Search"
            value=""
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
