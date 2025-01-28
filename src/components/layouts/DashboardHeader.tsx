import BellIcon from "../../../public/assets/dash-icons/BellIcon";
import ProfileImage from "../../../public/images/ProfileImage.png";

const DashboardHeader = () => {
  return (
    <header className="flex justify-between items-center px-6 py-2 bg-white">
      {/* Search Input */}
      <div className="relative flex items-center w-3/4">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          style={{ border: "1px solid #E0E0E0" }}
        />
      </div>

      {/* Notification and Profile Section */}
      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <div className="relative">
          <button className="focus:outline-none">
            <BellIcon />
          </button>
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-red-500 rounded-full">
            •
          </span>
        </div>

        {/* Profile Image */}
        <button className="w-8 h-8 overflow-hidden bg-gray-200 rounded-full focus:outline-none">
          <img
            src={ProfileImage}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
