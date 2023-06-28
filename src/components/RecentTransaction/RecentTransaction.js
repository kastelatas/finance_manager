import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RoutesEnum } from "@/constants/emun/routes";
import BaseTitle from "@/components/shared/BaseTitle";
import LinkWithIcon from "@/components/LinkWithIcon";
import RightArrowGray from "@/assets/Icons/RightArrowGray.svg";
import TabContent from "@/components/RecentTransaction/components/TabContent";
import TabHeader from "@/components/RecentTransaction/components/TabHeader";
import "./RecentTransaction.scss";
import { getTransaction } from "@/store/TransactionSlice";
import SmallLoader from "../SmallLoader";

const RecentTransaction = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const { transactions, loading } = useSelector(state => state.transactions);

  useEffect(() => {
    if (user.id) {
      dispatch(getTransaction(user.id));
      console.log("transactions", transactions);
    }
  }, [user]);

  return (
    <div className="recentTransaction">
      <div className="recentTransaction__title-wrapper">
        <BaseTitle
          text="Recent Transaction"
          fontSize="22"
        />
        <LinkWithIcon
          to={RoutesEnum.Transactions}
          text="View All"
          fontSize="12"
          icon={RightArrowGray}
        />
      </div>
      <div className="recentTransaction__tabs ">
        <TabHeader />
        <ul
          id="recentTransaction"
          className="uk-switcher "
        >
          <li className="tab-content">
            {loading ? (
              <SmallLoader />
            ) : (
              <TabContent transactions={transactions} />
            )}
          </li>
          <li className="tab-content">
            {loading ? (
              <SmallLoader />
            ) : (
              <TabContent transactions={transactions.filter(t => t.revenue)} />
            )}
          </li>
          <li className="tab-content">
            {loading ? (
              <SmallLoader />
            ) : (
              <TabContent transactions={transactions.filter(t => t.expenses)} />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RecentTransaction;
