import React from "react";
import PropTypes from "prop-types";
import Loader from "@/components/Loader";
import { useSelector } from "react-redux";
import style from "./AuthLayout.module.scss";

export const AuthLayout = ({ children }) => {
  const { loading } = useSelector(state => state.auth);

  return (
    <div className={style.authLayout}>
      {loading && <Loader />}
      {children}
    </div>
  );
};
AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
