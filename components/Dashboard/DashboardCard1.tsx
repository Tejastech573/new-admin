import React, { ReactNode } from "react";

interface CardDataStatsProps {
  title: string;
  total: string;
  className: string;
  children: ReactNode;
}

const DashboardCard1: React.FC<CardDataStatsProps> = ({
  title,
  total,
  children,
  className,
}) => {
  return (
    <div className="w-full rounded-t-2xl border border-stroke bg-white p-4 shadow-lg dark:border-strokedark dark:bg-boxdark sm:p-6 lg:p-8">
      <div className="flex items-center space-x-4">
        <div
          className={`${className} flex h-12 w-12 items-center justify-center rounded-full sm:h-14 sm:w-14 md:h-16 md:w-16`}
        >
          {children}
        </div>
        <div>
          <h4 className="text-lg font-bold text-black dark:text-white sm:text-xl">
            {total}
          </h4>
          <span className="text-sm text-gray-600 dark:text-gray-400 sm:text-base">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard1;
