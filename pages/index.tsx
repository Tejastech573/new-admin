import Image from "next/image";
import localFont from "next/font/local";
import Login from "@/components/Login/Login";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Dashboard from "@/components/Dashboard/Dashboard";

export default function Home() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const userToken = getCookie("token") as string | null;
    setToken(userToken);
  }, []);
  return (
    <>
      <div>
        {/* <Login /> */}
        {/* {!token ? ( */}
        {/* ) : ( */}
        <DefaultLayout>
          <Dashboard />
        </DefaultLayout>
      </div>
      {/* )}{" "} */}
    </>
  );
}
