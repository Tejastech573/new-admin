import React from "react";
import { FaRegNewspaper } from "react-icons/fa6";
import Divider from "../common/Divider/Divider";

const DashboardCard2: React.FC = () => {
  return (
    <div className="w-full rounded-lg border border-stroke bg-white p-4 shadow-lg dark:border-strokedark dark:bg-boxdark sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h4 className="text-lg font-semibold text-black dark:text-white sm:text-xl">
          Teen Patti
        </h4>
        <span className="cursor-pointer text-sm text-blue-500">View</span>
      </div>

      {/* Total Tables */}
      <div className="mb-6 text-center">
        <p className="text-3xl font-bold text-black dark:text-white sm:text-4xl">
          10
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 sm:text-base">
          Total Tables
        </p>
      </div>

      <Divider className="my-4 border-gray-300 dark:border-gray-700" />

      {/* Reports List */}
      <div className="space-y-4">
        {[
          { label: "Game Wise Reports", count: "92" },
          { label: "User Wise Reports", count: "92" },
          { label: "Hands Details Reports", count: "92" },
        ].map((report, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FaRegNewspaper className="text-lg text-black dark:text-white sm:text-xl" />
              <span className="text-sm text-black dark:text-white sm:text-base">
                {report.label}
              </span>
            </div>
            <span className="text-sm text-black dark:text-white sm:text-base">
              {report.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCard2;
