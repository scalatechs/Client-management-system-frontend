import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { GoFilter } from "react-icons/go";
import { ChevronDown, ChevronUp } from "lucide-react";
import { PiChatCircleLight } from "react-icons/pi";
import { BsPinAngle, BsPinAngleFill } from "react-icons/bs";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import clsx from "clsx";
import routes from "@/routes";
import useSortableTable from "@/hooks/useSortTable";

const ProjectMilestone = ({ project }: { project?: ProjectType }) => {
  const initialMilestones = project?.milestones || [];
  const {
    data: projectMilestones,
    sortTable,
    sortConfig,
  } = useSortableTable(initialMilestones); // Use hook
  const [pinned, setPinned] = useState<string[]>([]);
  const navigate = useNavigate();

  const getSortIcon = (key: keyof MilestoneType) => {
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
    <section className="mb-8">
      <div className="flex justify-between">
        <h2 className="text-lg text-foreground font-bold mb-4">
          Upcoming Milestones Overview
        </h2>
        <Link to={"/"} className="!text-primary-light">
          View all Projects
        </Link>
      </div>
      {/* table for medium + devices */}
      <table
        className="min-w-full border-separate hidden md:table"
        style={{ borderSpacing: "0 10px" }}
      >
        <thead>
          <tr className="text-[#B3B3B3]">
            <th className="py-2 px-4 text-left font-normal">Milestone Name</th>

            {(
              ["startDate", "dueDate", "status", "priority"] as Array<
                keyof MilestoneType
              >
            ).map((key, index) => (
              <th
                key={index}
                className="py-2 px-4 text-left cursor-pointer font-normal"
                onClick={() => sortTable(key)}
              >
                <div className="flex items-center gap-2">
                  {key === "startDate" && "Start Date"}
                  {key === "dueDate" && "Due Date"}
                  {key === "status" && "Status"}
                  {key === "priority" && "Priority"}
                  {getSortIcon(key)}
                </div>
              </th>
            ))}

            <th className="py-2 px-4 text-left font-normal">Action</th>
          </tr>
        </thead>
        <tbody>
          {projectMilestones.map((milestone, index) => (
            <tr
              key={index}
              className={clsx(
                "rounded-lg overflow-hidden transition-colors duration-300",
                pinned.includes(milestone.name)
                  ? "table_data_pinned"
                  : "bg-[#F8F8F8] hover:bg-gray-100"
              )}
              onClick={() => {
                navigate(
                  routes.clientPanel.timeline.project +
                    project?.id +
                    "/milestone-tasks/" +
                    milestone.id
                );
              }}
            >
              <td className="py-6 px-4 border-l border-t border-b rounded-l-lg">
                {milestone.name}
              </td>
              <td className="py-6 px-4 border-t border-b">
                {milestone.startDate}
              </td>
              <td className="py-6 px-4 border-t border-b">
                {milestone.dueDate}
              </td>
              <td
                className={clsx(
                  "py-6 px-4 border-t border-b",
                  milestone.statusColor
                )}
              >
                {milestone.status}
              </td>
              <td className="py-6 px-4 border-t border-b text-center">
                <button
                  className={clsx(
                    "py-2 px-4 rounded-full",
                    milestone.priorityColor
                  )}
                >
                  {milestone.priority}
                </button>
              </td>
              <td className="py-6 px-4 border-t border-b border-r rounded-r-lg">
                <div className="flex items-center gap-2 cursor-pointer">
                  <PiChatCircleLight size={25} color="#4A90E2" />
                  {pinned.includes(milestone.name) ? (
                    <BsPinAngleFill
                      color="#4A90E2"
                      size={25}
                      onClick={(e) => {
                        e.stopPropagation();
                        setPinned((prev) =>
                          prev.filter((name) => name !== milestone.name)
                        );
                      }}
                    />
                  ) : (
                    <BsPinAngle
                      color="#4A90E2"
                      size={25}
                      onClick={(e) => {
                        e.stopPropagation();
                        setPinned((prev) =>
                          prev.includes(milestone.name)
                            ? prev
                            : [...prev, milestone.name]
                        );
                      }}
                    />
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* for small devices */}
      <div className="md:hidden space-y-4">
        <Button className="bg-muted text-muted-foreground hover:text-muted-foreground hover:bg-muted text-xs flex gap-[10px] ml-auto">
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

export default ProjectMilestone;
