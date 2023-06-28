import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainLayout } from "@/layouts/MainLayout/MainLayout";
import BalanceCard from "@/components/BalanceCard";
import AddAccount from "@/components/AddAccount";
import BaseTitle from "@/components/shared/BaseTitle";
import BalanceModal from "@/components/Modals/BalanceModal";
import { getBalances, removeBalance } from "@/store/BalancesSlice";
import SmallLoader from "@/components/SmallLoader";
import "./Balances.scss";

export const Balances = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const { balances, loading } = useSelector(state => state.balances);
  const [isOpenBalanceModal, setIsOpenBalanceModal] = useState(false);

  const deleteBalance = id => {
    dispatch(removeBalance(id));
    dispatch(getBalances(user.id));
  };

  useEffect(() => {
    if (user.id) {
      dispatch(getBalances(user.id));
      console.log("balances", balances);
    }
  }, [user]);

  return (
    <MainLayout>
      <div className="balances-page">
        <BaseTitle
          text={"Balances"}
          fontSize="22"
          classes="balances-title"
        />
        {loading ? (
          <SmallLoader />
        ) : (
          <div className="flex">
            {balances.map(b => {
              return (
                <BalanceCard
                  {...b}
                  key={b.id}
                  deleteBalance={deleteBalance}
                />
              );
            })}
            <AddAccount onClick={() => setIsOpenBalanceModal(true)} />
          </div>
        )}

        <BalanceModal
          isOpen={isOpenBalanceModal}
          onClose={() => setIsOpenBalanceModal(false)}
        />
      </div>
    </MainLayout>
  );
};
