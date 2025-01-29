import { ChevronLeft } from "lucide-react";
import { Link, useParams } from "react-router";
import ProgressImage from "/images/ProgressImage.png";
import ExclamationImage from "/images/ExclamationImage.png";
import CompleteCircleImage from "/images/CompleteCircleImage.png";
import PaidRedImage from "/images/PaidRedImage.png";
import PaidGreenImage from "/images/PaidGreenImage.png";
import DashCard, { DashCardPlain } from "@/components/shared/DashCard";
import { projectsData } from "@/constants/data";
import routes from "@/routes";
import { Button } from "@/components/ui/button";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import ProjectMilestone from "@/components/clientPanel/timeline/ProjectMilestoneTable";

const ProjectOverview = () => {
  const { projectId } = useParams();
  const project = projectsData.find((project) => project.id === projectId);

  return (
    <section className="space-y-10">
      <div className="flex justify-between w-full font-semibold">
        <div className="flex text-2xl  items-center gap-6">
          <Link to={routes.clientPanel.timeline.home}>
            <ChevronLeft size={25} className="text-black" />
          </Link>
          <h1 className="text-foreground">{project?.name}</h1>
        </div>
        <h2
          className={`text-lg ${
            (project?.status === "In Progress" && "text-primary-light") ||
            (project?.status === "Completed" && "text-primary-green") ||
            (project?.status === "Not Started" && "text-muted-foreground")
          }`}
        >
          {project?.status}
        </h2>
      </div>
      <h1 className="page-header">Project Overview</h1>
      <div className="flex gap-6 flex-col lg:flex-row">
        <div className="md:grid flex flex-wrap grid-cols-3 gap-6 overflow-x-auto  md:w-auto">
          <DashCard
            content="Active Tasks"
            numbers={12}
            top={<img src={ProgressImage} alt="progress" />}
            type="active"
          />
          <DashCard
            content="Overdue Tasks"
            numbers={2}
            top={<img src={ExclamationImage} alt="overdue" />}
            type="overdue"
          />
          <DashCard
            content="Completed Tasks"
            numbers={4}
            top={<img src={CompleteCircleImage} alt="complete" />}
            type="complete"
          />
        </div>
        <div className="grid grid-cols-2 gap-6 flex-1">
          <DashCardPlain
            content="Total amount paid"
            head={"$750"}
            top={<img src={PaidGreenImage} alt="progress" />}
          />

          <DashCardPlain
            content="Pending Payments"
            head={"50"}
            top={<img src={PaidRedImage} alt="progress" />}
          />
        </div>
      </div>
      <div className="w-full flex">
        <h1 className="page-header">Project Milestones</h1>
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
      <ProjectMilestone project={project} />
    </section>
  );
};

export default ProjectOverview;
