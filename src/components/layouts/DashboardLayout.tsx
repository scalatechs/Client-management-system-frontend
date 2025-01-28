import { Outlet } from "react-router";
import DashboardHeader from "./DashboardHeader";
import DashboardNav, { DashboardNavMobile } from "./DashboardNav";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen  max-w-[2000px] mx-auto">
      {/* side nav */}
      <DashboardNav />
      <div className="flex flex-col flex-1">
        <DashboardHeader />
        <main className="flex-1 p-6 overflow-y-auto rounded-3xl bg-primary-foreground">
          <Outlet />
        </main>
        <DashboardNavMobile />
      </div>
    </div>
  );
};

export default DashboardLayout;
