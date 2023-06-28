import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./router";
import Home from "./pages/Home";
import Goals from "./pages/Goals";
import Bills from "./pages/Bills";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Balances from "./pages/Balances";
import Expenses from "./pages/Expenses";
import Settings from "./pages/Settings";
import Transactions from "./pages/Transactions";
import Balance from "./pages/Balance";
import Notification from "./components/Notification";
import { RoutesEnum } from "./constants/emun/routes";
import api from "@/axios/axiosWrapper";
import style from "./styles/App.module.scss";

function App() {
  return (
    <div className={style.App}>
      <BrowserRouter>
        <Routes>
          <Route
            path={RoutesEnum.Home}
            element={<PrivateRoute element={<Home />} />}
          />
          <Route
            path={RoutesEnum.SignIn}
            element={<PublicRoute element={<SignIn />} />}
          />
          <Route
            path={RoutesEnum.SignUp}
            element={<PublicRoute element={<SignUp />} />}
          />
          <Route
            path={RoutesEnum.Balances}
            element={<PrivateRoute element={<Balances />} />}
          />
          <Route
            path={RoutesEnum.SingleBalance}
            element={<PrivateRoute element={<Balance />} />}
          />
          <Route
            path={RoutesEnum.Transactions}
            element={<PrivateRoute element={<Transactions />} />}
          />
          <Route
            path={RoutesEnum.Bills}
            element={<PrivateRoute element={<Bills />} />}
          />
          <Route
            path={RoutesEnum.Expenses}
            element={<PrivateRoute element={<Expenses />} />}
          />
          <Route
            path={RoutesEnum.Goals}
            element={<PrivateRoute element={<Goals />} />}
          />
          <Route
            path={RoutesEnum.Settings}
            element={<PrivateRoute element={<Settings />} />}
          />
          <Route
            path={RoutesEnum.Any}
            element={<p>NotFound</p>}
          />
        </Routes>
      </BrowserRouter>
      <Notification />
    </div>
  );
}

export default App;
