import { Outlet } from "react-router";

import DashboardHeader from "./DashboardHeader";
import DashboardNav, { DashboardNavMobile } from "./DashboardNav";
import ChatBot from "./ChatBot";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen  max-w-[2000px] mx-auto">
      {/* side nav */}
      <DashboardNav />
      <div className="flex flex-col flex-1">
        <DashboardHeader />
        <main className="flex-1 xl:p-6 overflow-y-auto rounded-3xl bg-primary-foreground pb-20">
          <Outlet />
          <ChatBot />
        </main>
        <DashboardNavMobile />
      </div>
    </div>
  );
};

export default DashboardLayout;
