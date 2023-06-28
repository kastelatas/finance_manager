import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout/MainLayout";
import AccountDetails from "@/components/AccountDetails";
import BaseTitle from "@/components/shared/BaseTitle";
import TransactionHistoryTable from "@/components/TransactionHistoryTable";
import LoginButton from "@/components/Buttons/LoginButton";
import { useDispatch, useSelector } from "react-redux";
import { getBalance, updateBalance } from "@/store/BalancesSlice";
import SmallLoader from "@/components/SmallLoader";
import "./Balance.scss";

export const Balance = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const { balance, loading } = useSelector(state => state.balances);
  const [editMode, setEditMode] = useState(false);

  const updateBalances = b => {
    dispatch(updateBalance(b));
    dispatch(getBalance({ userId: user.id, balanceId: id }));
  };

  useEffect(() => {
    if (user.id) {
      dispatch(getBalance({ userId: user.id, balanceId: id }));
    }
  }, [user]);

  return (
    <MainLayout>
      <div className="balance">
        {loading ? (
          <SmallLoader />
        ) : (
          <>
            <BaseTitle
              text="Account Details"
              fontSize="22"
              classes={"mt-16 mb-16"}
            />
            {balance && (
              <AccountDetails
                balance={balance}
                editMode={editMode}
                setEditMode={setEditMode}
                updateBalance={updateBalances}
              />
            )}
            <div>
              <BaseTitle
                text="Transactions History"
                fontSize="22"
                classes={"mt-32 mb-16"}
              />
              <div className="table-wrapper">
                <TransactionHistoryTable />
                <LoginButton
                  text="Load More"
                  onClick={() => console.log("Load more balance")}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
};
