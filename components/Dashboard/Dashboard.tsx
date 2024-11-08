"use client";
import React, { useState } from "react";
import DashboardTable from "./DashboardTable";
import { CiSettings } from "react-icons/ci";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Switch from "@mui/material/Switch";
import useSnackbar from "@/hooks/useSnackbar";
import DashboardCard1 from "./DashboardCard1";
import { FaGamepad, FaHeart, FaStore } from "react-icons/fa6";
import DashboardCard2 from "./DashboardCard2";
import { BsFillHandbagFill } from "react-icons/bs";
import PopUp from "../common/PopUp/PopUp";

const Dashboard: React.FC = () => {
  const [serverDown, setServerDown] = useState(false);
  const [playerLimit, setPlayerLimit] = useState(false);
  const [actionModelOpen, setActionModelOpen] = useState<any>(false);
  const { showSnackbar } = useSnackbar();

  const handleServerDownChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setServerDown(event.target.checked);
    showSnackbar("server down", "default");
  };

  const handlePlayerLimitChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPlayerLimit(event.target.checked);
    showSnackbar("Player limit", "default");
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <PopUp
        openPopUp={actionModelOpen}
        closePopUp={() => {
          setActionModelOpen(false);
        }}
        HandleSubmit={() => {
          setActionModelOpen(false);
        }}
        HandleBlock={() => {
          setActionModelOpen(false);
        }}
      />

      <style>
        {`
          input::placeholder {
            color: #fff;
            opacity: 0.7;
          }
        `}
      </style>

      <div className="flex flex-col items-center justify-between space-y-4 px-4 py-4 md:flex-row md:space-x-6 md:space-y-0 md:px-6 md:py-5">
        <div className="text-xl font-semibold text-black md:text-2xl">
          Dashboard Overview
        </div>
        <div className="flex w-full flex-col items-center space-y-4 md:w-auto md:flex-row md:space-x-4 md:space-y-0">
          <div className="flex items-center">
            <label className="inline-flex cursor-pointer items-center">
              <span className="text-md font-medium text-gray-900 dark:text-gray-300">
                Server Down
              </span>
              <Switch
                size="medium"
                checked={serverDown}
                onChange={handleServerDownChange}
                color="primary"
              />
            </label>
          </div>
          <div className="flex items-center">
            <label className="inline-flex cursor-pointer items-center">
              <span className="text-md font-medium text-gray-900 dark:text-gray-300">
                Player Limit
              </span>
              <Switch
                checked={playerLimit}
                size="medium"
                onChange={handlePlayerLimitChange}
                color="primary"
              />
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 2xl:gap-8">
        <div className="grid">
          <DashboardCard1
            className="bg-[#605CFF4D]"
            title="Players"
            total="178+"
          >
            <FaHeart className="h-5 w-5 text-[#6254FF]" />
          </DashboardCard1>
          {/* <div className="mt-4">
            <DashboardCard2 />
          </div> */}
        </div>
        <div className="grid">
          <DashboardCard1
            className="bg-[#2FE5A74D]"
            title="Teen Patti"
            total="20+"
          >
            <FaGamepad className="h-6 w-6 text-[#2FE5A7]" />
          </DashboardCard1>
          {/* <div className="mt-4">
            <DashboardCard2 />
          </div> */}
        </div>
        <div className="grid">
          <DashboardCard1 className="bg-[#FF69B44D]" title="Ludo" total="90+">
            <BsFillHandbagFill className="h-5 w-5 text-[#FF69B4]" />
          </DashboardCard1>
          {/* <div className="mt-4">
            <DashboardCard2 />
          </div> */}
        </div>
        <div className="grid">
          <DashboardCard1 className="bg-[#605CFF4D]" title="Rummy" total="12+">
            <FaStore className="h-5 w-5 text-white" />
          </DashboardCard1>
          {/* <div className="mt-4">
            <DashboardCard2 />
          </div> */}
        </div>
      </div>

      <DashboardTable setActionModelOpen={setActionModelOpen} />
    </div>
  );
};

export default Dashboard;
