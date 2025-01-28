import { NavLink } from "react-router";

import { BsChatText } from "react-icons/bs";
import { CiViewTimeline } from "react-icons/ci";
import { GoCreditCard } from "react-icons/go";
import { LayoutDashboard } from "lucide-react";
import { HiOutlineSupport } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";

const DashboardSidebar = () => {
  const menuItems = [
    {
      label: "DASHBOARD",
      icon: <LayoutDashboard className="w-6 h-6" />,
      path: "/dashboard",
    },
    {
      label: "TIMELINE",
      icon: <CiViewTimeline className="w-6 h-6 " />,
      path: "/timeline",
    },
    {
      label: "CHATS",
      icon: <BsChatText className="w-6 h-6" />,
      path: "/chats",
    },
    {
      label: "PAYMENTS",
      icon: <GoCreditCard className="w-6 h-6" />,
      path: "/payments",
    },
  ];

  return (
    <div className="h-screen w-[135px] bg-white  flex flex-col items-center py-6 justify-between">
      <div className="text-xl font-bold">LOGO</div>
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

export default DashboardSidebar;
