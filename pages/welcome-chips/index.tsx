import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import WelcomeChips from "@/components/WelcomeChips/WelcomeChips";

export const metadata: Metadata = {
  title: "Welcome Chips",
  description: "Welcome Chips",
};

const Player = () => {
  return (
    <DefaultLayout>
      <WelcomeChips />
    </DefaultLayout>
  );
};

export default Player;
