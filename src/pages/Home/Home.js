import React from "react";
import { MainLayout } from "../../layouts/MainLayout/MainLayout";
import RecentTransaction from "../../components/RecentTransaction/";
import VerticalBarChart from "@/components/Charts/VerticalBarChart";
import ExpensesBreakdown from "@/components/ExpensesBreakdown";
import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <MainLayout>
      <div className={styles.Home}>
        <div className={styles.Content}>
          <RecentTransaction />
          <div>
            <VerticalBarChart />
            <ExpensesBreakdown />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
