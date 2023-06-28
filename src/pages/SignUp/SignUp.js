import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "@/layouts/AuthLayout";
import SiginUpForm from "@/components/Forms/SignUpForm";
import Title from "@/components/shared/Title";
import styles from "./SignUp.module.scss";
import { RoutesEnum } from "@/constants/emun/routes";

export const SignUp = () => {
  return (
    <AuthLayout>
      <div className={styles.siginUp}>
        <div className={styles.container}>
          <Title text="<span> Finance </span> Manager. <span>IO</span>" />
          <h1 className={styles.formTitle}>Create an account</h1>
          <SiginUpForm />
          <p className={styles.sigInText}>
            Already have an account?{" "}
            <Link
              to={RoutesEnum.SignIn}
              className={styles.colorText}
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};
