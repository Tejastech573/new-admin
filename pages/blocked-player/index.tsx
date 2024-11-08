import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import BlockedPlayer from "@/components/BlockedPlayer/BlockedPlayer";

export const metadata: Metadata = {
  title: "blocked-player",
  description: "blocked-player details",
};

const BasicChartPage: React.FC = () => {
  return (
    <DefaultLayout>
      <BlockedPlayer />
    </DefaultLayout>
  );
};

export default BasicChartPage;
