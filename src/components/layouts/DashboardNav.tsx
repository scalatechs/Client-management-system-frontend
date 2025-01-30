import { NavLink } from "react-router";

import { BsChatText } from "react-icons/bs";
import { CiViewTimeline } from "react-icons/ci";
import { GoCreditCard } from "react-icons/go";
import { LayoutDashboard } from "lucide-react";
import { HiOutlineSupport } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";
import routes from "@/routes";

const menuItems = [
  {
    label: "DASHBOARD",
    icon: <LayoutDashboard className="w-6 h-6" />,
    path: routes.clientPanel.dashboard,
  },
  {
    label: "TIMELINE",
    icon: <CiViewTimeline className="w-6 h-6 " />,
    path: routes.clientPanel.timeline.home,
  },
  {
    label: "CHATS",
    icon: <BsChatText className="w-6 h-6" />,
    path: routes.clientPanel.chats,
  },
  {
    label: "PAYMENTS",
    icon: <GoCreditCard className="w-6 h-6" />,
    path: routes.clientPanel.payments,
  },
];

const DashboardNav = () => {
  return (
    <div className="h-screen w-[135px] hidden bg-white  lg:flex flex-col items-center py-6 justify-between">
      <div className="text-xl font-bold">
        <img src="/assets/scala-logo-light.png" />
      </div>
      <div className="flex flex-col items-center gap-8">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-[10px] ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`
            }
          >
            <div className="mb-1">{item.icon}</div>
            <p className="text-xs">{item.label}</p>
          </NavLink>
        ))}
      </div>
      <div className=" flex flex-col items-center gap-8">
        <NavLink
          to="/help-support"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-primary" : "text-muted-foreground"
            }`
          }
        >
          <div className="mb-1">
            <HiOutlineSupport className="w-6 h-6" />
          </div>
          <p className="text-xs">HELP & SUPPORT</p>
        </NavLink>
        <NavLink
          to="/logout"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-primary" : "text-muted-foreground"
            }`
          }
        >
          <div className="mb-1">
            <FiLogOut className="h-6 w-6" />
          </div>
          <p className="text-xs">LOG OUT</p>
        </NavLink>
      </div>
    </div>
  );
};

export const DashboardNavMobile = () => {
  return (
    <div className="w-full bg-white   flex  lg:hidden items-center p-4 justify-center">
      <div className="flex  items-center gap-8">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-[10px] ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`
            }
          >
            <div className="mb-1">{item.icon}</div>
            <p className="text-xs">{item.label}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default DashboardNav;
