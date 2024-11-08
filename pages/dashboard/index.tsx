import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Dashboard from "@/components/Dashboard/Dashboard";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "TeenPatti Gold Admin",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </>
  );
}
