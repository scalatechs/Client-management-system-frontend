import { Link, useNavigate } from "react-router";
import { GoFilter } from "react-icons/go";
import { Button } from "../ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { projectsData } from "@/constants/data";
import useSortableTable from "@/hooks/useSortTable";

const ProjectTable = () => {
  const navigate = useNavigate();
  const {
    data: projects,
    sortTable,
    sortConfig,
  } = useSortableTable<ProjectType>(projectsData);

  const navigateToProject = ({ projectId }: { projectId: string }) => {
    navigate(`/timeline/project/${projectId}`);
  };

  const getSortIcon = (key: string) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending" ? (
        <ChevronUp />
      ) : (
        <ChevronDown />
      );
    }
    return <ChevronDown />;
  };

  return (
    <section className="mb-20">
      <div className="flex justify-between">
        <h2 className="text-lg text-foreground font-bold mb-4">
          Recent Projects
        </h2>
        <Link to={"/"} className="!text-primary-light">
          View all Projects
        </Link>
      </div>
      {/* Table for medium + devices */}
      <table
        className="min-w-full border-separate hidden md:table"
        style={{ borderSpacing: "0 10px" }}
      >
        <thead>
          <tr className="text-[#B3B3B3]">
            {(["name", "startDate", "dueDate"] as Array<keyof ProjectType>).map(
              (key, index) => (
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
              )
            )}
            <th className="py-2 px-4 text-left font-normal">Status</th>
            <th className="py-2 px-4 text-left font-normal">Priority</th>
            <th className="py-2 px-4 text-left font-normal">Action</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr
              key={index}
              className="bg-[#F8F8F8] border-[#E0E0E0] hover:bg-gray-100 cursor-pointer"
              onClick={() => navigateToProject({ projectId: project.id })}
            >
              <td className="table_data_left">{project.name}</td>
              <td className="py-8 px-4 border-t border-b">
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
              <td className="table_data_right text-blue-600 hover:underline cursor-pointer">
                View
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* For small devices */}
      <div className="md:hidden space-y-4">
        <Button variant={"gray"}>
          <GoFilter className="h-4 w-4" />
          Filter
        </Button>
        <Card className="bg-secondary border-secondary-border text-xs px-4 py-6 gap-6 grid grid-cols-2 font-normal">
          <div className="font-semibold">Project name</div>
          <div className="font-semibold">Website Redesign</div>
          <div>Start Date</div>
          <div>Website Redesign</div>
          <div>Due Date</div>
          <div>Website Redesign</div>
          <div>Status</div>
          <div>Website Redesign</div>
          <div>Priority</div>
          <div>Project name</div>
          <div>Action</div>
          <div>Website Redesign</div>
        </Card>
      </div>
    </section>
  );
};

export default ProjectTable;
