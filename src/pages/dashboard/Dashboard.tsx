import ProgressImage from "/images/ProgressImage.png";
import ExclamationImage from "/images/ExclamationImage.png";
import CompleteCircleImage from "/images/CompleteCircleImage.png";
import PaidRedImage from "/images/PaidRedImage.png";
import PaidGreenImage from "/images/PaidGreenImage.png";
import ProjectTable from "../../components/ProjectTable";
import DashCard, { DashCardPlain } from "@/components/shared/DashCard";

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <div className="flex gap-6">
        <div className="flex gap-6">
          <DashCard
            content="Active tasks"
            numbers={221}
            icon={<img src={ProgressImage} alt="progress" />}
            type="active"
          />
          <DashCard
            content="Overdue tasks"
            numbers={15}
            icon={<img src={ExclamationImage} alt="overdue" />}
            type="overdue"
          />
          <DashCard
            content="Completed tasks"
            numbers={685}
            icon={<img src={CompleteCircleImage} alt="progress" />}
            type="complete"
          />
        </div>
        <div className="grid grid-cols-2 gap-6 flex-1">
          <DashCardPlain
            content="Total amount paid"
            head={"$750"}
            icon={<img src={PaidGreenImage} alt="progress" />}
          />

          <DashCardPlain
            content="Pending Payments"
            head={"50"}
            icon={<img src={PaidRedImage} alt="progress" />}
          />
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-4">Recent Projects</h2>
        <div className="overflow-hidden">
          <ProjectTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
