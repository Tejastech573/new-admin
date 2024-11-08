import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import DailyReward from "@/components/DailyReward/DailyReward";
import AppVersion from "@/components/AppVersion/AppVersion";

export const metadata: Metadata = {
  title: "App Version",
  description: "App Version",
};

const AppVer: React.FC = () => {
  return (
    <DefaultLayout>
      <AppVersion />
    </DefaultLayout>
  );
};

export default AppVer;
