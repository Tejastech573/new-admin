"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ColDef } from "ag-grid-community";
import Image from "next/image";
import { CiClock2, CiMail } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import CustomTable from "../common/Table/CustomTable";
import { getUnBlockUser } from "@/api/api";

interface RowData {
  name: string;
  invoiceId: string;
  chips: number;
  loginType: string;
  version: string;
  lastLogin: string;
  createdAt: string;
  email: string;
  avatar: string;
}

export default function PlayerTable({
  setPlayerModel,
  setTotalChips = "",
}: {
  setPlayerModel: Dispatch<SetStateAction<any>>;
  setTotalChips: any;
}) {
  const [rowData, setRowData] = useState<RowData[]>([]);
  const [isBlocked] = useState<boolean>(false);

  useEffect(() => {
    fetchUserData();
  }, [isBlocked]);

  const fetchUserData = async () => {
    try {
      const response = await getUnBlockUser();
      const mappedData = response.map((user: any) => ({
        name: user.name,
        invoiceId: user._id,
        chips: user.chips_balance,
        loginType: user.login_type,
        version: user.version,
        lastLogin: new Date(user.last_login).toLocaleDateString(),
        createdAt: new Date(user.created_at).toLocaleDateString(),
        email: user.email,
        avatar:
          "https://i.pravatar.cc/50?img=" + Math.floor(Math.random() * 10 + 1),
      }));
      const TotalChips = response.reduce(
        (sum: number, user: any) => sum + user.chips_balance,
        0,
      );
      setTotalChips(TotalChips);
      setRowData(mappedData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const columnDefs: Array<ColDef<RowData>> = [
    {
      field: "name",
      headerName: "Name",
      cellRenderer: (params: any) => (
        <div className="flex items-center gap-2">
          <Image
            src={params.data.avatar}
            alt="avatar"
            height={30}
            width={30}
            className="rounded-full"
          />
          <span>{params.value}</span>
        </div>
      ),
    },
    { field: "invoiceId", headerName: "Invoice Id" },
    { field: "chips", headerName: "Chips" },
    { field: "loginType", headerName: "Login type" },
    { field: "version", headerName: "Version" },
    {
      field: "lastLogin",
      headerName: "Last Login",
      cellRenderer: (params: any) => (
        <div className="flex items-center gap-2">
          <CiClock2 className="h-4 w-4 text-green-500" />
          <span>{params.value}</span>
        </div>
      ),
    },
    {
      field: "createdAt",
      headerName: "Created at",
      cellRenderer: (params: any) => (
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="h-4 w-4 text-green-500" />
          <span>{params.value}</span>
        </div>
      ),
    },
    {
      field: "email",
      headerName: "Email",
      cellRenderer: (params: any) => (
        <div className="flex items-center gap-2">
          <CiMail className="h-4 w-4 text-blue-500" />
          <span>{params.value}</span>
        </div>
      ),
    },
    {
      headerName: "Action",
      cellRenderer: (params: any) => (
        <button className="text-gray-400 hover:text-gray-600">
          <FiMoreHorizontal
            className="h-5 w-5"
            onClick={() => {
              setPlayerModel({
                open: true,
                userId: params.data.invoiceId,
                name: params.data.name,
              });
            }}
          />
        </button>
      ),
      cellStyle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        textAlign: "center",
      },
    },
  ];

  return <CustomTable rowData={rowData} columnDefs={columnDefs} />;
}
