"use client";
import { welcomeChips } from "@/api/api";
import React, { useEffect, useState } from "react";

function WelcomeChips() {
  const [welcomeChip, setWelcomeChips] = useState("");
  useEffect(() => {
    const FetchData = async () => {
      const response = await welcomeChips();
      setWelcomeChips(response.welcome_chips);
      console.log("response :>> ", response);
    };
    FetchData();
  }, []);
  return (
    <div className="">
      <p className="mx-auto pt-5 text-center text-lg font-bold">
        Welcome Chips -: {welcomeChip}
      </p>{" "}
    </div>
  );
}

export default WelcomeChips;
