import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Players from "@/components/Players/Players";

export const metadata: Metadata = {
  title: "Player",
  description: "Player details",
};

const Player = () => {
  return (
    <DefaultLayout>
      <Players />
    </DefaultLayout>
  );
};

export default Player;
