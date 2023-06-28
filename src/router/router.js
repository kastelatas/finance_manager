import { Navigate } from "react-router-dom";
import { RoutesEnum } from "@/constants/emun/routes";
import authService from "@/services/authService";

export const PrivateRoute = ({ element }) => {
  const isAuthenticated = authService.isAuthenticated();

  if (!isAuthenticated) {
    return (
      <Navigate
        to={RoutesEnum.SignIn}
        replace
      />
    );
  }

  return element;
};

export const PublicRoute = ({ restricted, element }) => {
  const isAuthenticated = authService.isAuthenticated();

  if (isAuthenticated && restricted) {
    return (
      <Navigate
        to={RoutesEnum.Home}
        replace
      />
    );
  }

  return element;
};
