import { GoFilter } from "react-icons/go";
import { Button } from "../ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router";
import { ChevronDown, ChevronUp } from "lucide-react";
import useSortableTable from "@/hooks/useSortTable";
import { milestones as initialMilestones } from "@/constants/data";

const MilestoneTable = () => {
  const {
    data: milestones,
    sortTable,
    sortConfig,
  } = useSortableTable(initialMilestones); // Use the custom hook

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
    <section className="mb-8">
      <div className="flex justify-between">
        <h2 className="text-lg text-foreground font-bold mb-4">
          Upcoming Milestones Overview
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
            <th className="py-2 px-4 text-left font-normal">Milestone Name</th>
            <th className="py-2 px-4 text-left font-normal">Project Name</th>
            {(["dueDate", "status"] as Array<keyof MilestoneType>).map(
              (key, index) => (
                <th
                  key={index}
                  className="py-2 px-4 text-left cursor-pointer font-normal"
                  onClick={() => sortTable(key)}
                >
                  <div className="flex items-center gap-2">
                    {key === "dueDate" && "Due Date"}
                    {key === "status" && "Status"}
                    {getSortIcon(key)}
                  </div>
                </th>
              )
            )}
            <th className="py-2 px-4 text-left font-normal">Priority</th>
            <th className="py-2 px-4 text-left font-normal">Notes</th>
          </tr>
        </thead>
        <tbody>
          {milestones.map((milestone, index) => (
            <tr
              key={index}
              className="bg-[#F8F8F8] hover:bg-gray-100"
              style={{ borderRadius: "8px", overflow: "hidden" }}
            >
              <td className="py-8 px-4 border-l border-t border-b  rounded-l-lg">
                {milestone.name}
              </td>
              <td className="py-8 px-4 border-t border-b ">
                {milestone.projectName}
              </td>
              <td className="py-8 px-4 border-t border-b ">
                {milestone.dueDate}
              </td>
              <td
                className={`py-8 px-4 border-t border-b ${milestone.statusColor}`}
              >
                {milestone.status}
              </td>
              <td className="py-8 px-4 border-t border-b text-center">
                <button
                  className={`py-2 px-4 rounded-full ${milestone.priorityColor}`}
                >
                  {milestone.priority}
                </button>
              </td>
              <td className="py-4 px-4 border-t border-b border-r  rounded-r-lg">
                Initial design approval
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* For small devices */}
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

export default MilestoneTable;
