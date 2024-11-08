"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import { BsMicrosoft } from "react-icons/bs";
import useLocalStorage from "@/hooks/useLocalStorage";
import ClickOutside from "@/components/ClickOutside";
import { GiTabletopPlayers } from "react-icons/gi";
import { VscGraphLine } from "react-icons/vsc";
import { FaEarthAfrica } from "react-icons/fa6";
import { RiSettingsLine } from "react-icons/ri";
import { FaUserShield } from "react-icons/fa";
import { GiCardAceSpades } from "react-icons/gi";
import { MdHomeFilled } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { TbUserOff } from "react-icons/tb";
import { FaDice } from "react-icons/fa6";
import { TiMessageTyping } from "react-icons/ti";
import { MdContactPage } from "react-icons/md";
import { GiDoubleDiaphragm } from "react-icons/gi";
import { RxCountdownTimer } from "react-icons/rx";
import { MdInsertPageBreak } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { FaStore } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";
import { GiCardRandom } from "react-icons/gi";
import DarkModeSwitcher from "../Header/DarkModeSwitcher";
import Divider from "../common/Divider/Divider";
import useAuth from "@/app/context/AuthContext";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuGroups = [
  {
    name: "General",
    menuItems: [
      {
        icon: <MdHomeFilled className="h-5 w-5" />,
        label: "Dashboard",
        route: "/dashboard",
      },
      {
        icon: <GiTabletopPlayers className="h-5 w-5" />,
        label: "Players",
        route: "/players",
      },
      {
        icon: <TbUserOff className="h-5 w-5" />,
        label: "Blocked Players",
        route: "/blocked-player",
      },
      {
        icon: <FaEarthAfrica className="h-5 w-5" />,
        label: "Website Details",
        route: "#",
      },
      {
        icon: <BsMicrosoft className="h-5 w-5" />,
        label: "App Version",
        route: "/app-version",
      },
      {
        icon: <FaRegSmile className="h-5 w-5" />,
        label: "Emoji",
        route: "#",
      },
    ],
  },

  {
    name: "Rewards",
    menuItems: [
      {
        icon: <GiDoubleDiaphragm className="h-5 w-5" />,
        label: "Welcome Chips",
        route: "/welcome-chips",
      },
      {
        icon: <IoDiamondOutline className="h-5 w-5" />,
        label: "Daily Reward",
        route: "/daily-reward",
      },
      {
        icon: <VscGraphLine className="h-5 w-5" />,
        label: "Ad Reward",
        route: "/ad-reward",
      },
    ],
  },

  {
    name: "Rewards",
    menuItems: [
      {
        icon: <FaRegBell className="h-5 w-5" />,
        label: "Live Notification",
        route: "#",
      },
      {
        icon: <TiMessageTyping className="h-5 w-5" />,
        label: "Admin Message",
        route: "#",
      },
      {
        icon: <FaUserShield className="h-5 w-5" />,
        label: "Admin Logs",
        route: "#",
      },
      {
        icon: <RiSettingsLine className="h-5 w-5" />,
        label: "Setting",
        route: "#",
      },
      {
        icon: <MdContactPage className="h-5 w-5" />,
        label: "Update Chips Logs",
        route: "#",
      },
      {
        icon: <RxCountdownTimer className="h-5 w-5" />,
        label: "Payment History",
        route: "/payment-history",
      },
      {
        icon: <MdInsertPageBreak className="h-5 w-5" />,
        label: "New Feature",
        route: "#",
      },
      {
        icon: <FaStore className="h-5 w-5" />,
        label: "Shop",
        route: "#",
      },
    ],
  },

  {
    menuItems: [
      {
        icon: <FaDice className="h-5 w-5" />,
        label: "My games",
        route: "#",
      },
      {
        icon: <GiCardRandom className="h-5 w-5" />,
        label: "Teen Patti",
        route: "#",
        children: [
          { label: "Welcome Chips", route: "#" },
          { label: "Daily Reward", route: "#" },
          { label: "Ad Reward", route: "#" },
        ],
      },
      {
        icon: <GiCardAceSpades className="h-5 w-5" />,
        label: "Rummy",
        route: "#",
        children: [],
      },
      {
        icon: <GiCardRandom className="h-5 w-5" />,
        divider: false,
        label: "Ludo",
        route: "#",
        children: [],
      },
    ],
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const { logout, user } = useAuth();
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`fixed left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="mx-auto flex items-center justify-between gap-2 px-6 py-2 lg:py-2">
          <Link href="/">
            <Image
              width={130}
              height={30}
              src={"/images/logo/main-logo.svg"}
              alt="Logo"
              priority
            />
          </Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            className="block lg:hidden"
          >
            <svg
              className="fill-current"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                fill=""
              />
            </svg>
          </button>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          {/* <!-- Sidebar Menu --> */}
          <Divider className="border-gray-600" />
          <nav className="mt-2 px-4 py-4 lg:mt-2 lg:px-0">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                  {group.name}
                </h3>

                <ul className="mb-6 flex flex-col gap-1.5">
                  {group.menuItems &&
                    group.menuItems.map((menuItem, menuIndex) => (
                      <SidebarItem
                        key={menuIndex}
                        item={menuItem}
                        pageName={pageName}
                        setPageName={setPageName}
                      />
                    ))}
                  <Divider className="border-gray-600" />
                </ul>
              </div>
            ))}
            <div className="mt-10 flex pb-3">
              <div className="items-start px-4 text-start align-middle">
                <DarkModeSwitcher />
              </div>
              <span className="text-white">Dark mode</span>
            </div>

            <div className="flex items-center justify-between bg-gray-800 p-4">
              <div className="flex items-center space-x-3">
                <Image
                  width={112}
                  height={112}
                  src={"/images/user/user1.jpg"}
                  alt="User"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span className="text-md text-white">{user?.name}</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaRegBell className="text-xl text-white" />
                <button onClick={logout}>
                  <IoLogOutOutline className="text-xl text-white" />
                </button>
              </div>
            </div>
          </nav>
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
