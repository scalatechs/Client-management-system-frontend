import { Search } from "lucide-react";
import NotificationPanel from "./NotificationPanel";
import ProfileImage from "/images/ProfileImage.png";
import { Link } from "react-router";
import routes from "@/routes";

const DashboardHeader = () => {
  return (
    <header className="flex justify-between items-center md:px-10 md:py-8 p-4 bg-white">
      {/* Search Input */}
      <div className="relative flex items-center w-3/4">
        <Search className="absolute left-3 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 !pl-9 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          style={{ border: "1px solid #E0E0E0" }}
        />
      </div>

      {/* Notification and Profile Section */}
      <div className="flex items gap-4">
        <NotificationPanel />
        {/* Profile Image */}
        <Link
          to={routes.clientPanel.profile}
          className="w-8 h-8 overflow-hidden bg-gray-200 rounded-full focus:outline-none"
        >
          <img
            src={ProfileImage}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </Link>
      </div>
    </header>
  );
};

export default DashboardHeader;
