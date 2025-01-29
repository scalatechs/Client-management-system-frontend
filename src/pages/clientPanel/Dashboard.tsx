import { Link } from "react-router";

import ProgressImage from "/images/ProgressImage.png";
import ExclamationImage from "/images/ExclamationImage.png";
import CompleteCircleImage from "/images/CompleteCircleImage.png";
import PaidRedImage from "/images/PaidRedImage.png";
import PaidGreenImage from "/images/PaidGreenImage.png";

import ProjectTable from "@/components/clientPanel/ProjectTable";
import DashCard, { DashCardPlain } from "@/components/shared/DashCard";
import ProjectChart from "@/components/clientPanel/ProjectChart";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MilestoneChart from "@/components/clientPanel/MilestoneChart";
import MilestoneTable from "@/components/clientPanel/MilestoneTable";
import ComplaintsStatusTable from "@/components/clientPanel/ComplaintStatusTable";

const Dashboard = () => {
  return (
    <section className="min-h-screen space-y-10">
      <h1 className="page-header">Dashboard Overview</h1>
      {/* Cards */}
      <section className="flex flex-col xl:flex-row gap-6">
        <div className="md:grid flex flex-wrap grid-cols-3 gap-6 overflow-x-auto  md:w-auto">
          <DashCard
            content="Active tasks"
            numbers={221}
            top={
              <img
                src={ProgressImage}
                alt="progress"
                className="w-6 h-6 md:w-10 md:h-10"
              />
            }
            type="active"
          />
          <DashCard
            content="Overdue tasks"
            numbers={15}
            top={
              <img
                src={ExclamationImage}
                alt="overdue"
                className="w-6 h-6 md:w-10 md:h-10"
              />
            }
            type="overdue"
          />
          <DashCard
            content="Completed tasks"
            numbers={685}
            top={
              <img
                src={CompleteCircleImage}
                alt="progress"
                className="w-6 h-6 md:w-10 md:h-10"
              />
            }
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
            top={
              <div className="flex w-full justify-between underline text-primary-light text-base font-medium">
                <Link to={"/payments"}>Pay Now</Link>
                <img src={PaidRedImage} alt="progress" />
              </div>
            }
          />
        </div>
      </section>

      {/* Charts */}

      <section className="hidden md:flex flex-col xl:flex-row gap-8 ">
        <Card className="border-secondary-border bg-transparent rounded-3xl border-2  h-[319px] w-[695px]">
          <div className="flex w-full justify-between px-4 py-4">
            <h1 className="font-semibold text-lg">Project Progress Chart</h1>
            <Select>
              <SelectTrigger className="w-[167px] py-4 px-8  bg-muted rounded-full text-muted-foreground">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                {/* <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem> */}
              </SelectContent>
            </Select>
          </div>
          <div className="p-4 border-t-2">
            <ProjectChart />
          </div>
        </Card>

        {/*milestone pie chart */}
        <Card className="border-secondary-border bg-transparent rounded-3xl border-2 flex-1">
          <div className="flex w-full justify-between px-4 py-4">
            <h1 className="font-semibold text-lg">
              Milestone Completion Chart
            </h1>
            <Select>
              <SelectTrigger className="w-[167px] py-4 px-8  bg-muted rounded-full text-muted-foreground">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                {/* <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem> */}
              </SelectContent>
            </Select>
          </div>
          <div className="p-4 border-t-2 relative">
            <MilestoneChart />
          </div>
        </Card>
      </section>

      {/* Tables */}
      <section>
        {/* projects */}
        <ProjectTable />

        {/* Milestones */}
        <MilestoneTable />

        {/* ComplaintStatus */}

        <ComplaintsStatusTable />
      </section>
    </section>
  );
};

export default Dashboard;
