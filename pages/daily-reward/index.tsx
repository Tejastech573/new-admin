import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import DailyReward from "@/components/DailyReward/DailyReward";

export const metadata: Metadata = {
  title: "Daily Reward",
  description: "Daily Reward",
};

const BasicChartPage: React.FC = () => {
  return (
    <DefaultLayout>
      <DailyReward />
    </DefaultLayout>
  );
};

export default BasicChartPage;
