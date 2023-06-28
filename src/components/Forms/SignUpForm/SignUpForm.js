import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import EmailInput from "@/components/Inputs/EmailInput";
import PasswordInput from "@/components/Inputs/PasswordInput";
import LoginButton from "@/components/Buttons/LoginButton";
import GoogleSiginInButton from "@/components/Buttons/GoogleSigiInButton";
import TextInput from "@/components/Inputs/TextInput";
import { register as userRegister } from "@/store/AuthSlice";
import { NotificationContext } from "@/contexts/NotificationContext/NotificationContext";
import { NotificationEnum } from "@/constants/emun/notifications";
import { RoutesEnum } from "@/constants/emun/routes";
import styles from "./SignUpForm.module.scss";
import validateEmail from "@/validators/validateEmail";
import validatePassword from "@/validators/validatePassword";

export const SignUpForm = () => {
  const dispatch = useDispatch();
  const { user, error } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const { addNotification } = useContext(NotificationContext);
  const [signUp, setSignUp] = useState({
    nickname: "",
    email: "",
    password: "",
  });

  const register = async e => {
    e.preventDefault();

    if (!validateEmail(signUp.email)) {
      addNotification(NotificationEnum.WrongEmail);
      return;
    }

    if (validatePassword(signUp.password)) {
      addNotification(NotificationEnum.WrongPassword);
      return;
    }

    dispatch(
      userRegister({
        nickname: signUp.nickname,
        email: signUp.email,
        password: signUp.password,
      })
    ).then(data => {
      addNotification(NotificationEnum.RegisterSuccess);
      navigate(RoutesEnum.SignIn);
    });
  };

  useEffect(() => {
    if (error) {
      addNotification(NotificationEnum.WrongAuthData);
    }
  }, [error]);

  return (
    <>
      <form
        className={styles.formContainer}
        onSubmit={register}
      >
        <div className={styles.inputBlock}>
          <label>Name</label>
          <TextInput
            onChange={({ target: { value } }) =>
              setSignUp({ ...signUp, nickname: value })
            }
            placeHolder="Your name"
            value={signUp.nickname}
            required={true}
          />
        </div>
        <div className={styles.inputBlock}>
          <label> Email Address</label>
          <EmailInput
            onChange={({ target: { value } }) =>
              setSignUp({ ...signUp, email: value })
            }
            placeHolder="Email Address"
            value={signUp.email}
            required={true}
          />
        </div>
        <div className={styles.inputBlock}>
          <div className={styles.labelWrapper}>
            <label>Password</label>
          </div>
          <PasswordInput
            onChange={({ target: { value } }) =>
              setSignUp({ ...signUp, password: value })
            }
            value={signUp.password}
            placeHolder="Password"
            required={true}
          />
        </div>
        <div className={styles.buttonsection}>
          <div className={styles.termsOfServece}>
            <p className={styles.diviredText}>
              By continuing, you agree to our{" "}
              <Link
                to="#"
                className={styles.colorText}
              >
                terms of service.
              </Link>
            </p>
          </div>
          <LoginButton
            onClick={() => console.log("click")}
            text="Sign up"
          />
        </div>
      </form>
      <div className={styles.dividerWrapper}>
        <div className={styles.dividerLine}>
          {" "}
          <div className={styles.dividerText}>or sign in with</div>
        </div>
      </div>
      <div className={styles.googleBtnWrapper}>
        <GoogleSiginInButton
          onClick={() => console.log("login google")}
          text="Continue with Google"
        />
      </div>
    </>
  );
};
