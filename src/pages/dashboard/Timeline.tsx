import ProgressImage from "/images/ProgressImage.png";
import ExclamationImage from "/images/ExclamationImage.png";
import CompleteCircleImage from "/images/CompleteCircleImage.png";
import PaidRedImage from "/images/PaidRedImage.png";
import PaidGreenImage from "/images/PaidGreenImage.png";
import ProjectTable from "../../components/ProjectTable";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import DashCard, { DashCardPlain } from "@/components/shared/DashCard";

const Timeline = () => {
  return (
    <div className="min-h-screen">
      <div className="flex gap-6 flex-col lg:flex-row">
        <div className="md:grid flex flex-wrap grid-cols-3 gap-6 overflow-x-auto  md:w-auto">
          <DashCard
            content="In Progress"
            numbers={12}
            top={<img src={ProgressImage} alt="progress" />}
            type="active"
          />
          <DashCard
            content="Completed"
            numbers={25}
            top={<img src={CompleteCircleImage} alt="progress" />}
            type="complete"
          />
          <DashCard
            content="Not started"
            numbers={2}
            top={<img src={ExclamationImage} alt="progress" />}
            type="notStarted"
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

      <div>
        <div className="flex justify-between items-center mb-4">
          <div></div>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-[#F0F0F0] text-[#B3B3B3] rounded flex items-center">
              Sort
              <FaArrowUp className="h-3 w-3 ml-1 mr-1" />
              <FaArrowDown className="h-3 w-3" />
            </button>

            <button className="px-4 py-2 bg-[#F0F0F0] text-[#B3B3B3] rounded flex items-center">
              This Month
              <IoIosArrowDown className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>{" "}
        <div className="overflow-hidden">
          <ProjectTable />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
