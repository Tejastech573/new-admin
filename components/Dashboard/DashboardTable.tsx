import Image from "next/image";
import CustomTable from "../common/Table/CustomTable";
import { ColDef } from "ag-grid-community";
import { FaCalendarAlt } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { Dispatch, SetStateAction } from "react";

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

const DashboardTable = ({
  setActionModelOpen,
}: {
  setActionModelOpen: Dispatch<SetStateAction<any>>;
}) => {
  const rowData: RowData[] = [
    {
      name: "Table amount",
      invoiceId: "50",
      chips: 50,
      loginType: "1.0",
      version: "1.0",
      lastLogin: "12 Dec, 2020",
      createdAt: "12 Dec, 2020",
      email: "N/A",
      avatar: "",
    },
    {
      name: "Table amount",
      invoiceId: "100",
      chips: 100,
      loginType: "1.0",
      version: "1.0",
      lastLogin: "12 Dec, 2020",
      createdAt: "12 Dec, 2020",
      email: "N/A",
      avatar: "",
    },
    {
      name: "Table amount",
      invoiceId: "200",
      chips: 200,
      loginType: "1.0",
      version: "1.0",
      lastLogin: "12 Dec, 2020",
      createdAt: "12 Dec, 2020",
      email: "N/A",
      avatar: "",
    },
    {
      name: "Table amount",
      invoiceId: "500",
      chips: 500,
      loginType: "1.0",
      version: "1.0",
      lastLogin: "12 Dec, 2020",
      createdAt: "12 Dec, 2020",
      email: "N/A",
      avatar: "",
    },
    {
      name: "Table amount",
      invoiceId: "1000",
      chips: 1000,
      loginType: "1.0",
      version: "1.0",
      lastLogin: "12 Dec, 2020",
      createdAt: "12 Dec, 2020",
      email: "N/A",
      avatar: "",
    },
    {
      name: "Table amount",
      invoiceId: "2000",
      chips: 2000,
      loginType: "1.0",
      version: "1.0",
      lastLogin: "12 Dec, 2020",
      createdAt: "12 Dec, 2020",
      email: "N/A",
      avatar: "",
    },
    {
      name: "Table amount",
      invoiceId: "6000",
      chips: 6000,
      loginType: "1.0",
      version: "1.0",
      lastLogin: "12 Dec, 2020",
      createdAt: "12 Dec, 2020",
      email: "N/A",
      avatar: "",
    },
  ];

  const columnDefs: Array<ColDef<RowData>> = [
    { field: "invoiceId", headerName: "Table amount" },
    { field: "loginType", headerName: "Table" },
    {
      field: "createdAt",
      headerName: "Created at",
      cellRenderer: (params: any) => (
        <div className="flex items-center justify-center gap-2">
          <FaCalendarAlt className="h-4 w-4 text-green-500" />
          <span>{params.value}</span>
        </div>
      ),
    },
    {
      headerName: "Action",
      cellRenderer: () => (
        <button className="text-gray-400 hover:text-gray-600">
          <FiMoreHorizontal
            className="h-5 w-5"
            onClick={() => {
              setActionModelOpen(true);
            }}
          />
        </button>
      ),
      cellStyle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center", // Center-aligns content in the Action column cells
        fontWeight: "bold",
        textAlign: "center",
      },
    },
  ];

  return (
    <>
      <div className="h-screen w-full p-4">
        <div className="my-4">
          <h2 className="text-2xl font-bold dark:text-white">Table Lists</h2>
        </div>
        <div className="table-dark-theme h-full w-full">
          <CustomTable
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={{
              sortable: false,
              filter: true,
              suppressMovable: false,
              //   headerClass: "text-center", // Center-aligns header text
              //   cellStyle: {
              //     display: "flex",
              //     alignItems: "center",
              //     justifyContent: "center", // Center-aligns cell content
              //     fontWeight: "bold",
              //     textAlign: "center",
              //   },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default DashboardTable;
