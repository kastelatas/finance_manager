import React, { useEffect } from "react";
import PropTypes from "prop-types";
import SideBar from "../../components/SideBar";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import styles from "./MainLayout.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "@/store/AuthSlice";

export const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector(state => state.auth);

  useEffect(() => {
    if (!user.id) {
      dispatch(auth(localStorage.getItem("token")));
    }
  }, []);

  return (
    <div className={styles.mainLayout}>
      <SideBar />
      {loading && <Loader />}
      <div className={styles.mainLayoutWrapper}>
        <Header />
        <div className={styles.mainLayoutContent}>{children}</div>
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
