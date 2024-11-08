"use client";
import { welcomeChips } from "@/api/api";
import React, { useEffect, useState } from "react";

function DailyReward() {
  const [dailyReward, setDailyReward] = useState("");
  useEffect(() => {
    const FetchData = async () => {
      const response = await welcomeChips();
      setDailyReward(response.welcome_chips);
      console.log("response :>> ", response);
    };
    FetchData();
  }, []);

  return (
    <div className="">
      <p className="mx-auto pt-5 text-center text-lg font-bold">
        Daily Reward -: {dailyReward}
      </p>{" "}
    </div>
  );
}

export default DailyReward;
