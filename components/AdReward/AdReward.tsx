"use client";
import { welcomeChips } from "@/api/api";
import React, { useEffect, useState } from "react";

function AdReward() {
  const [adReward, setAdReward] = useState("");
  useEffect(() => {
    const FetchData = async () => {
      const response = await welcomeChips();
      setAdReward(response.ad_reward);
      console.log("response :>> ", response);
    };
    FetchData();
  }, []);
  return (
    <div className="">
      <p className="mx-auto pt-5 text-center text-lg font-bold">
        Ad Reward -: {adReward}
      </p>{" "}
    </div>
  );
}

export default AdReward;
