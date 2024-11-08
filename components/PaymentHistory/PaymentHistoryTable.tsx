import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ColDef } from "ag-grid-community";
import { GetPaymentHistory } from "@/api/api";

interface PaymentRowData {
  id: string;
  userId: string;
  amount: number;
  transactionType: string;
  transactionStatus: string;
  createdAt: string;
  updatedAt: string;
  userName: string;
  userEmail: string;
  loginType: string;
  chipsBalance: number;
  lastLogin: string;
  createdAtUser: string;
  isBlocked: boolean;
  isAdmin: boolean;
  version: string;
}

const PaymentHistoryTable: React.FC = () => {
  const [rowData, setRowData] = useState<PaymentRowData[]>([]);

  useEffect(() => {
    fetchPaymentData();
  }, []);

  const fetchPaymentData = async () => {
    // This is where you'd make your API call to get the data
    const response = await GetPaymentHistory(); // Replace with your actual API endpoint
    console.log("response :>> ", response);
    const mappedData = response.map((payment: any) => ({
      id: payment._id,
      userId: payment.user_id,
      amount: payment.amount,
      transactionType: payment.transaction_type,
      transactionStatus: payment.transaction_status,
      createdAt: new Date(payment.created_at).toLocaleDateString(),
      updatedAt: new Date(payment.updated_at).toLocaleDateString(),
      userName: payment.user.name,
      userEmail: payment.user.email,
      loginType: payment.user.login_type,
      chipsBalance: payment.user.chips_balance,
      lastLogin: new Date(payment.user.last_login).toLocaleDateString(),
      createdAtUser: new Date(payment.user.created_at).toLocaleDateString(),
      isBlocked: payment.user.is_blocked,
      isAdmin: payment.user.is_admin,
      version: payment.user.version,
    }));
    setRowData(mappedData);
  };

  const columnDefs: ColDef[] = [
    { field: "id", headerName: "Transaction ID", pinned: "left", width: 150 },
    { field: "userId", headerName: "User ID", pinned: "left", width: 150 },
    { field: "amount", headerName: "Amount" }, //pinned: "left"
    { field: "transactionType", headerName: "Transaction Type" },
    { field: "transactionStatus", headerName: "Transaction Status" },
    { field: "createdAt", headerName: "Created At" },
    { field: "updatedAt", headerName: "Updated At" },
    { field: "userName", headerName: "User Name" },
    { field: "userEmail", headerName: "User Email" },
    { field: "loginType", headerName: "Login Type" },
    { field: "chipsBalance", headerName: "Chips Balance" },
    { field: "lastLogin", headerName: "Last Login" },
    { field: "createdAtUser", headerName: "User Created At" },
    {
      field: "isBlocked",
      headerName: "Is Blocked",
      cellRenderer: ({ value }: any) => (value ? "Yes" : "No"),
    },
    {
      field: "isAdmin",
      headerName: "Is Admin",
      cellRenderer: ({ value }: any) => (value ? "Yes" : "No"),
    },
    { field: "version", headerName: "App Version" },
  ];

  return (
    <div className="ag-theme-alpine-dark h-[400px] w-full">
      <style jsx global>{`
        .ag-theme-alpine-dark {
          --ag-background-color: #ffffff;
          --ag-header-background-color: #f1f5f9;
          --ag-header-foreground-color: #000;
          --ag-foreground-color: #111827;
          --ag-border-color: #d1d5db;
        }
        .dark .ag-theme-alpine-dark {
          --ag-background-color: #1a1a2e;
          --ag-header-background-color: #333;
          --ag-header-foreground-color: #ffffff;
          --ag-foreground-color: #d1d5db;
          --ag-border-color: #444;
        }
        .ag-theme-alpine-dark .ag-header-cell,
        .ag-theme-alpine-dark .ag-cell {
          padding: 6px 8px;
          border-bottom: 1px solid var(--ag-border-color);
          font-weight: bold;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ag-header-cell-label {
          justify-content: center;
        }

        .ag-theme-alpine-dark .ag-body-viewport,
        .ag-theme-alpine-dark .ag-body-horizontal-scroll-viewport,
        .ag-theme-alpine-dark .ag-body-vertical-scroll-viewport {
          overflow: hidden !important; /* Hide overflow on body */
        }
        .ag-theme-alpine-dark .ag-row {
          min-height: 30px;
          background-color: var(--ag-background-color);
        }

        /* Additional styles for preventing horizontal scrollbar */
        .ag-theme-alpine-dark .ag-pinned-left-header,
        .ag-theme-alpine-dark .ag-pinned-left-cols-container {
          overflow: hidden !important; /* Prevent scrollbar for pinned columns */
        }
      `}</style>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={{
          sortable: true,
          flex: 1,
          filter: true,
          minWidth: 210,
        }}
        animateRows={true}
        enableCellTextSelection={true}
      />
    </div>
  );
};

export default PaymentHistoryTable;
