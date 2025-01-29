import { ChevronLeft } from "lucide-react";
import { Link, useParams } from "react-router";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

import { projectsData } from "@/constants/data";
import routes from "@/routes";
import { Button } from "@/components/ui/button";
import MilestoneTasksTable from "@/components/clientPanel/timeline/MilestoneTasksTable";

const MilestoneTasks = () => {
  const { projectId, milestoneId } = useParams();
  const milestone = projectsData
    .find((project) => project.id === projectId)
    ?.milestones.find((milestone) => milestone.id === milestoneId);

  const projectName = projectsData.find(
    (project) => project.id === projectId
  )?.name;

  return (
    <section className="space-y-10">
      <div className="flex justify-between w-full font-semibold">
        <div className="flex text-2xl  items-center gap-6">
          <Link to={routes.clientPanel.timeline.project + projectId}>
            <ChevronLeft size={25} className="text-black" />
          </Link>
          <h1 className="text-foreground">
            {projectName} : {milestone?.name}
          </h1>
        </div>
        <h2
          className={`text-lg ${
            (milestone?.status === "In Progress" && "text-primary-light") ||
            (milestone?.status === "Completed" && "text-primary-green") ||
            (milestone?.status === "Not Started" && "text-muted-foreground")
          }`}
        >
          {milestone?.status}
        </h2>
      </div>

      <div className="w-full flex">
        <h1 className="page-header">Milestone Tasks</h1>
        <Button
          variant={"gray"}
          className="gap-1 text-lg font-medium py-4 px-8"
        >
          Sort
          <span className="flex -space-x-1">
            <FaArrowUp className="h-3 w-3 ml-1 mr-1" />
            <FaArrowDown className="h-3 w-3 ml-1 mr-1" />
          </span>
        </Button>
      </div>
      <MilestoneTasksTable milestone={milestone} />
    </section>
  );
};

export default MilestoneTasks;
