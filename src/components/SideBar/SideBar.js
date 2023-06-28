import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "@/store/AuthSlice";
import SideBarLinksList from "./components/SideBarLinks/SideBarLinksList";
import LogOutButton from "./components/LogOut";
import ProfileLink from "./components/ProfileLink/ProfileLink";
import userPhoto from "@/assets/Icons/ProfileImage.svg";
import styles from "./SideBar.module.scss";

export default function SideBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector(state => state.auth);

  const logout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <div className={styles.SideBar}>
      <div className={styles.sideBarLinks}>
        <p className={styles.headerTitle}>
          <span className={styles.boldText}>Finance</span> Manager.{" "}
          <span className={styles.boldText}>IO</span>
        </p>
        <SideBarLinksList />
      </div>
      <div className={styles.sideBarFooter}>
        <LogOutButton onClick={logout} />
        {user?.id && (
          <ProfileLink
            userName={user?.fullName}
            userPhoto={user.image || userPhoto}
          />
        )}
      </div>
    </div>
  );
}
