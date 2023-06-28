import React from "react";
import { MainLayout } from "@/layouts/MainLayout/MainLayout";
import SavingSummaryChart from "@/components/Charts/SavingSummaryChart";
import GoalsCard from "@/components/Goals";

export const Goals = () => {
  return (
    <MainLayout>
      <SavingSummaryChart />
      <GoalsCard />
    </MainLayout>
  );
};
