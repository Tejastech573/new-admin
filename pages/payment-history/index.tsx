import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Dashboard from "@/components/Dashboard/Dashboard";
import PaymentHistory from "@/components/PaymentHistory/PaymentHistory";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "TeenPatti Gold Admin",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <PaymentHistory />
      </DefaultLayout>
    </>
  );
}
