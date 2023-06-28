import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginButton from "@/components/Buttons/LoginButton";
import PasswordInput from "@/components/Inputs/PasswordInput";
import "./SecurityForm.scss";
import { updateProfile } from "@/store/SettingsSlice";

const SecurityForm = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  const [security, setSecurity] = useState({
    oldPassword: user.password || "",
    newPassword: "" || "",
    repeatPassword: "" || "",
  });

  useEffect(() => {
    setSecurity({
      oldPassword: user.password,
      newPassword: "",
      repeatPassword: "",
    });
  }, [user]);

  const changePassword = e => {
    e.preventDefault();

    if (security.oldPassword === user.password) {
      if (security.newPassword === security.repeatPassword) {
        dispatch(updateProfile({ ...user, password: security.newPassword }));
      }
    }
  };

  return (
    <form
      className="security-form"
      onSubmit={changePassword}
    >
      <div className="input-wrapper">
        <label>Old Password</label>
        <PasswordInput
          placeholder={security.oldPassword}
          value={security.oldPassword || ""}
          onChange={({ target: { value } }) => {
            setSecurity({ ...security, oldPassword: value });
          }}
        />
      </div>
      <div className="input-wrapper">
        <label>New Password</label>
        <PasswordInput
          placeholder={security.newPassword}
          value={security.newPassword || ""}
          onChange={({ target: { value } }) => {
            setSecurity({ ...security, newPassword: value });
          }}
        />
      </div>
      <div className="input-wrapper">
        <label>Retype Password</label>
        <PasswordInput
          placeholder={security.repeatPassword}
          value={security.repeatPassword || ""}
          onChange={({ target: { value } }) => {
            setSecurity({ ...security, repeatPassword: value });
          }}
        />
      </div>
      <LoginButton
        text="Update Password"
        onClick={() => console.log("Update Password")}
      />
    </form>
  );
};

export default SecurityForm;
