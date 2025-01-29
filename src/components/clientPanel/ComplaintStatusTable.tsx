import { GoFilter } from "react-icons/go";

import { Button } from "../ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router";
import { ChevronDown, ChevronUp } from "lucide-react";
import useSortableTable from "@/hooks/useSortTable";

type ComplaintType = {
  id: string;
  complaint: string;
  dateFiled: string;
  status: "Under Review" | "Resolved" | "In Progress";
  statusColor: string;
};

const ComplaintsStatusTable = () => {
  const initialComplaints: ComplaintType[] = [
    {
      id: "#12312",
      complaint: "Project alpha issue with payment",
      dateFiled: "January 10, 2024",
      status: "Under Review",
      statusColor: "text-orange-500",
    },
    {
      id: "#12313",
      complaint: "Project beta delay",
      dateFiled: "January 15, 2024",
      status: "Resolved",
      statusColor: "text-primary-green",
    },
    {
      id: "#12314",
      complaint: "Project gamma issue with shipping",
      dateFiled: "January 20, 2024",
      status: "In Progress",
      statusColor: "text-primary-light",
    },
  ];

  const {
    data: complaints,
    sortTable,
    sortConfig,
  } = useSortableTable(initialComplaints);

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
    <section>
      <div className="flex justify-between">
        <h2 className="text-lg text-foreground font-bold mb-4">
          Complaint Status
        </h2>
        <Link to={"/"} className="!text-primary-light">
          View all Complaints
        </Link>
      </div>
      {/* Table for medium + devices */}
      <table
        className="min-w-full border-separate hidden md:table"
        style={{ borderSpacing: "0 10px" }}
      >
        <thead>
          <tr className="text-[#B3B3B3]">
            <th className="py-2 px-4 text-left font-normal">Complaint ID</th>
            <th className="py-2 px-4 text-left font-normal">Complaint</th>
            <th className="py-2 px-4 text-left font-normal">Date Filed</th>
            {(["status"] as Array<keyof ComplaintType>).map((key, index) => (
              <th
                key={index}
                className="py-2 px-4 text-left cursor-pointer font-normal"
                onClick={() => sortTable(key)}
              >
                <div className="flex items-center gap-2">
                  {key === "status" && "Status"}
                  {getSortIcon(key)}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {complaints.map((complaint, index) => (
            <tr
              key={index}
              className="bg-[#F8F8F8] hover:bg-gray-100"
              style={{ borderRadius: "8px", overflow: "hidden" }}
            >
              <td className="py-8 px-4 border-l border-t border-b rounded-l-lg">
                {complaint.id}
              </td>
              <td className="py-8 px-4 border-t border-b">
                {complaint.complaint}
              </td>
              <td className="py-8 px-4 border-t border-b">
                {complaint.dateFiled}
              </td>
              <td
                className={`py-8 px-4 border-t border-b ${complaint.statusColor}`}
              >
                {complaint.status}
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

export default ComplaintsStatusTable;
