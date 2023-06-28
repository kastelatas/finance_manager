import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login as userLogin } from "@/store/AuthSlice";
import { RoutesEnum } from "@/constants/emun/routes";
import EmailInput from "@/components/Inputs/EmailInput";
import PasswordInput from "@/components/Inputs/PasswordInput";
import CheckBox from "@/components/Inputs/CheckBox";
import LoginButton from "@/components/Buttons/LoginButton";
import GoogleSiginInButton from "@/components/Buttons/GoogleSigiInButton";
import { NotificationContext } from "@/contexts/NotificationContext/NotificationContext";
import { NotificationEnum } from "@/constants/emun/notifications";
import styles from "./SingInForm.module.scss";

export const SingInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { addNotification } = useContext(NotificationContext);
  const { user, error } = useSelector(state => state.auth);

  const [singIn, setSingIn] = useState({
    email: "",
    password: "",
  });
  const [checked, setChecked] = useState(false);

  const login = async e => {
    e.preventDefault();

    dispatch(userLogin({ email: singIn.email, password: singIn.password }));
  };

  useEffect(() => {
    console.log(user);
    if (user.id) {
      addNotification(NotificationEnum.LoginSuccess);
      navigate(RoutesEnum.Home);
    }
  }, [user]);

  useEffect(() => {
    if (error) {
      addNotification(NotificationEnum.WrongAuthData);
    }
  }, [error]);

  return (
    <>
      <form
        className={styles.formContainer}
        onSubmit={login}
      >
        <div className={styles.inputBlock}>
          <label> Email Address</label>
          <EmailInput
            onChange={({ target: { value } }) =>
              setSingIn({ ...singIn, email: value })
            }
            placeHolder="Email Address"
            value={singIn.email}
          />
        </div>
        <div className={styles.inputBlock}>
          <div className={styles.labelWrapper}>
            <label>Password</label>
            <Link
              className={styles.forgotPasswordLink}
              to="/forgot-password"
            >
              {" "}
              Forgot password?
            </Link>
          </div>
          <PasswordInput
            onChange={({ target: { value } }) =>
              setSingIn({ ...singIn, password: value })
            }
            value={singIn.password}
            placeHolder="Password"
          />
        </div>
        <div className={styles.checkBoxBlock}>
          <CheckBox
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <p>Keep me signed in</p>
        </div>
        <LoginButton
          onClick={() => console.log("click")}
          text="Login"
        />
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
      <Link
        className={styles.createAccount}
        to={RoutesEnum.SignUp}
      >
        Create an account
      </Link>
    </>
  );
};
