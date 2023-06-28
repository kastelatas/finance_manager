import React, { useEffect, useState } from "react";
import { MainLayout } from "@/layouts/MainLayout/MainLayout";
import BaseTitle from "@/components/shared/BaseTitle";
import { Tab, TabContent, TabHeader, Tabs } from "@/components/Tabs";
import RecentTransactionTable from "@/components/RecentTransactionTable";
import LoginButton from "@/components/Buttons/LoginButton";
import TransactionModal from "@/components/Modals/TransactionModal";
import "./Transactions.scss";
import { useDispatch, useSelector } from "react-redux";
import { getTransaction } from "@/store/TransactionSlice";
import SmallLoader from "@/components/SmallLoader";

export const Transactions = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const { transactions, loading } = useSelector(state => state.transactions);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    if (user.id) {
      dispatch(getTransaction(user.id));
      console.log("transactions", transactions);
    }
  }, [user]);

  return (
    <MainLayout>
      <div className="transactions">
        <BaseTitle
          text="Recent Transaction"
          fontSize={"22"}
          classes={"transactions-title"}
        />
        <Tabs>
          <TabHeader>
            <Tab>All</Tab>
            <Tab>Revenue</Tab>
            <Tab>Expenses</Tab>
            <button
              className="modal-open"
              onClick={() => setIsOpenModal(true)}
            >
              Create Transaction
            </button>
          </TabHeader>
          <TabContent>
            <div className="table-wrapper">
              {loading ? (
                <SmallLoader />
              ) : (
                <RecentTransactionTable transactions={transactions} />
              )}

              <LoginButton
                text="Load More"
                onClick={() => console.log("Load more firs tab")}
              />
            </div>
            <div className="table-wrapper">
              {loading ? (
                <SmallLoader />
              ) : (
                <RecentTransactionTable
                  transactions={transactions.filter(t => t.revenue)}
                />
              )}
              <LoginButton
                text="Load More"
                onClick={() => console.log("Load more second tab")}
              />
            </div>
            <div className="table-wrapper">
              {loading ? (
                <SmallLoader />
              ) : (
                <RecentTransactionTable
                  transactions={transactions.filter(t => t.expenses)}
                />
              )}
              <LoginButton
                text="Load More"
                onClick={() => console.log("Load more third tab")}
              />
            </div>
          </TabContent>
        </Tabs>
        <TransactionModal
          isOpen={isOpenModal}
          onClose={() => setIsOpenModal(false)}
        />
      </div>
    </MainLayout>
  );
};
