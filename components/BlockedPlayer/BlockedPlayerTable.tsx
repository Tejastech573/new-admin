// BlockedPlayerTable.tsx
"use client";

import React, { useEffect, useState } from "react";
import { ColDef } from "ag-grid-community";
import { CiClock2, CiMail } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import Image from "next/image";
import CustomTable from "../common/Table/CustomTable";
import { getBlockUser } from "@/api/api";

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

export default function BlockedPlayerTable({ setBlockPlayerModel }: any) {
  const [rowData, setRowData] = useState<RowData[]>([]);
  const [isBlocked] = useState<boolean>(true);

  useEffect(() => {
    fetchUserData();
  }, [isBlocked]);

  const fetchUserData = async () => {
    try {
      const response = await getBlockUser();
      const mappedData = response.map((user: any) => ({
        name: user.name,
        invoiceId: user._id,
        chips: user.chips_balance,
        loginType: user.login_type,
        version: user.version,
        lastLogin: new Date(user.last_login).toLocaleDateString(),
        createdAt: new Date(user.created_at).toLocaleDateString(),
        email: user.email,
        avatar: "",
      }));
      setRowData(mappedData);
      console.log("User data:", mappedData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const columnDefs: Array<ColDef<RowData>> = [
    {
      field: "name",
      headerName: "Name",
      cellRenderer: (params: any) => <span>{params.value}</span>,
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
        <button
          onClick={() => {
            setBlockPlayerModel({
              open: true,
              userId: params.data.invoiceId,
              name: params.data.name,
            });
          }}
          className="text-gray-400 hover:text-gray-600"
        >
          <FiMoreHorizontal className="h-5 w-5" />
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
