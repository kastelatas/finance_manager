import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile as update } from "@/store/SettingsSlice";
import TextInput from "@/components/Inputs/TextInput";
import EmailInput from "@/components/Inputs/EmailInput";
import PhoneNumberInput from "@/components/Inputs/PhoneNumberInput";
import LoginButton from "@/components/Buttons/LoginButton";
import UploadImage from "@/components/Inputs/UploadImage";
import "./AccountForm.scss";
import { auth } from "@/store/AuthSlice";

const AccountForm = () => {
  const dispatch = useDispatch();
  const { user, token } = useSelector(state => state.auth);
  const [userSettings, setUserSettings] = useState({
    fullName: user.fullName,
    email: user.email,
    userName: user.userName,
    phone: user.phone,
    image: "",
  });
  const [image, setImage] = useState("");

  useEffect(() => {
    setUserSettings({
      fullName: user.fullName,
      email: user.email,
      userName: user.userName,
      phone: user.phone,
      image: user.image,
    });
  }, [user]);

  const uploadImg = ({ target: { files } }) => {
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      function () {
        console.log(reader.result);
        setImage(reader.result);
        setUserSettings({ ...userSettings, image: reader.result });
      },
      false
    );

    if (files[0]) {
      reader.readAsDataURL(files[0]);
    }
  };

  const updateProfile = e => {
    e.preventDefault();

    const profile = { ...userSettings, id: user.id };
    dispatch(update(profile)).then(() => {
      dispatch(auth(localStorage.getItem("token")));
    });
  };

  return (
    <form
      className="account-form"
      onSubmit={updateProfile}
    >
      <div className="form-wrapper">
        <div>
          <div className="input-wrapper">
            <label>Full name</label>
            <TextInput
              placeholder={userSettings.fullName}
              value={userSettings.fullName || ""}
              onChange={({ target: { value } }) => {
                setUserSettings({ ...userSettings, fullName: value });
              }}
            />
          </div>
          <div className="input-wrapper">
            <label>Email</label>
            <EmailInput
              placeholder={userSettings.email}
              value={userSettings.email || ""}
              onChange={({ target: { value } }) => {
                setUserSettings({ ...userSettings, email: value });
              }}
            />
          </div>
          <div className="input-wrapper">
            <label>Username</label>
            <TextInput
              placeholder={userSettings.userName}
              value={userSettings.userName || ""}
              onChange={({ target: { value } }) => {
                setUserSettings({ ...userSettings, userName: value });
              }}
            />
          </div>
          <div className="input-wrapper">
            <label>Phone Number</label>
            <PhoneNumberInput
              placeholder="+880  |  51547 58868"
              value={userSettings.phone || ""}
              onChange={value => {
                setUserSettings({ ...userSettings, phone: value });
              }}
            />
          </div>
        </div>
        <UploadImage
          url={userSettings.image}
          onChange={uploadImg}
        />
      </div>
      <LoginButton
        text="Update Profile"
        onClick={() => {}}
      />
    </form>
  );
};

export default AccountForm;
