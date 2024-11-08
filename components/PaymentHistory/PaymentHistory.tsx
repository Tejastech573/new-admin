"use client";
import React from "react";
import PaymentHistoryTable from "./PaymentHistoryTable";
import { HiMagnifyingGlass } from "react-icons/hi2";

function PaymentHistory() {
  return (
    <div className="mx-4">
      <style>
        {`
          input::placeholder {
            color: #fff;
            opacity: 0.7;
          }
        `}
      </style>
      <div className="flex flex-col items-center justify-between px-4 py-4 md:flex-row md:px-6 md:py-5">
        <div className="text-dark text-xl font-semibold md:text-2xl">
          Payment History
        </div>
        <div className="flex w-full items-center space-x-4 md:w-auto">
          {/* Search Form */}
          <form
            action="https://formbold.com/s/unique_form_id"
            method="POST"
            className="w-full md:w-auto"
          >
            <div className="relative w-full md:w-64 lg:w-[350px]">
              {/* Search Icon */}
              <button className="absolute left-3 top-1/2 -translate-y-1/2 transform">
                <HiMagnifyingGlass className="h-5 w-5 text-white" />
              </button>

              <input
                type="text"
                placeholder="Search"
                className="w-full rounded-lg bg-gray-400 py-3 pl-10 pr-4 text-white focus:outline-none"
              />
            </div>
          </form>
        </div>
      </div>
      <PaymentHistoryTable />
    </div>
  );
}

export default PaymentHistory;
