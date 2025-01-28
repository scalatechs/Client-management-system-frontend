import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const ProjectTable = () => {
  const [projects, setProjects] = useState([
    {
      name: "Website Redesign",
      startDate: "January 1, 2023",
      dueDate: "March 15, 2023",
      status: "Completed",
      priority: "Medium",
      statusColor: "",
      priorityColor: "bg-[#FF9800] text-white",
    },
    {
      name: "E-commerce Platform Setup",
      startDate: "January 1, 2023",
      dueDate: "March 15, 2023",
      status: "In Progress",
      priority: "High",
      statusColor: "text-blue-500",
      priorityColor: "bg-[#F44336]   text-white",
    },
    {
      name: "Mobile App Development",
      startDate: "January 1, 2023",
      dueDate: "March 15, 2023",
      status: "Not Started",
      priority: "Low",
      statusColor: "text-gray-500",
      priorityColor: "bg-[#FFC107] text-white",
    },
  ]);

  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });

  const sortTable = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }

    const sortedProjects = [...projects].sort((a, b) => {
      if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
      if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;
      return 0;
    });

    setProjects(sortedProjects);
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending" ? <FaArrowUp /> : <FaArrowDown />;
    }
    return <FaArrowDown />;
  };

  return (
    <div className="p-4">
      <table
        className="min-w-full border-separate"
        style={{ borderSpacing: "0 10px" }}
      >
        <thead>
          <tr className="text-[#B3B3B3]">
            {["name", "startDate", "dueDate"].map((key, index) => (
              <th
                key={index}
                className="py-2 px-4 text-left cursor-pointer font-normal"
                onClick={() => sortTable(key)}
              >
                <div className="flex items-center gap-2">
                  {key === "name" && "Project Name"}
                  {key === "startDate" && "Start Date"}
                  {key === "dueDate" && "Due Date"}
                  {getSortIcon(key)}
                </div>
              </th>
            ))}
            <th className="py-2 px-4 text-left font-normal">Status</th>
            <th className="py-2 px-4 text-left font-normal">Priority</th>
            <th className="py-2 px-4 text-left font-normal">Action</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr
              key={index}
              className="bg-[#F8F8F8] hover:bg-gray-100"
              style={{ borderRadius: "8px", overflow: "hidden" }}
            >
              <td className="py-8 px-4 border-l border-t border-b border-[#E0E0E0] rounded-l-lg">
                {project.name}
              </td>
              <td className="py-8 px-4 border-t border-b border-[#E0E0E0]">
                {project.startDate}
              </td>
              <td className="py-8 px-4 border-t border-b border-[#E0E0E0]">
                {project.dueDate}
              </td>
              <td
                className={`py-8 px-4 border-t border-b border-[#E0E0E0] ${project.statusColor}`}
              >
                {project.status}
              </td>
              <td className="py-8 px-4 border-t border-b border-[#E0E0E0] text-center">
                <button
                  className={`py-2 px-4 rounded-full ${project.priorityColor}`}
                >
                  {project.priority}
                </button>
              </td>
              <td className="py-4 px-4 border-t border-b border-r border-[#E0E0E0] rounded-r-lg text-blue-600 hover:underline cursor-pointer">
                View
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
