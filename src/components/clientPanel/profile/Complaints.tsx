import { Button } from "@/components/ui/button";
import { GoFilter } from "react-icons/go";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp, Plus, X } from "lucide-react";
import useSortableTable from "@/hooks/useSortTable";
import { AnimatePresence, motion } from "framer-motion";
import { MouseEvent, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ComplaintType = {
  id: string;
  complaint: string;
  dateFiled: string;
  status: "Under Review" | "Resolved" | "In Progress";
  statusColor: string;
};
const Complaints = () => {
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
  const [open, setOpen] = useState<boolean>(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent<HTMLDivElement>) => {
    if (overlayRef.current && event.target === overlayRef.current) {
      setOpen(false);
    }
  };

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
    <div className="gap-6 flex  flex-col ">
      <Button
        className="transition-all w-fit self-end hover:w-[220px]"
        onClick={() => setOpen(true)}
      >
        ADD COMPLAIN
      </Button>
      <AnimatePresence>
        {open && (
          <motion.div
            ref={overlayRef}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClickOutside}
          >
            <motion.div
              className="absolute flex flex-col gap-8  bg-white p-8 rounded-2xl shadow-xl max-w-2xl overflow-y-auto h-[628px] w-full"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="flex w-full justify-between">
                <h1 className="text-xl font-semibold ">File Complain</h1>
                <X onClick={() => setOpen(false)} className="cursor-pointer" />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-end text-black font-medium">
                  Date:12/15/2024
                </p>
                <div className="space-y-6">
                  <div className="w-full space-y-4">
                    <label htmlFor="title">Title</label>
                    <div className="flex rounded-3xl border  h-[58px] items-center text-sm p-0 focus-within:border-foreground shadow-sm">
                      <Input
                        placeholder={""}
                        type={"text"}
                        className="form-input border-0  pl-6 text-black placeholder:text-black"
                      />
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-full space-y-4">
                      <label htmlFor="category">Category</label>
                      <div className="flex rounded-3xl border  h-[58px] items-center text-sm p-0 focus-within:border-foreground shadow-sm">
                        <Input
                          placeholder={""}
                          type={"text"}
                          className="form-input border-0  pl-6 text-black placeholder:text-black"
                        />
                      </div>
                    </div>
                    <div className="w-full space-y-4">
                      <label htmlFor="priority">Priority</label>
                      <div className="flex rounded-3xl border  h-[58px] items-center text-sm p-0 focus-within:border-foreground shadow-sm">
                        <Input
                          placeholder={""}
                          type={"text"}
                          className="form-input border-0  pl-6 text-black placeholder:text-black"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full space-y-4">
                    <label htmlFor="description">Description</label>
                    <div className="flex rounded-3xl border  items-center text-sm p-0 focus-within:border-foreground shadow-sm">
                      <Textarea
                        placeholder={"Enter description here"}
                        cols={5}
                        className="form-input border-0  pl-6 text-black min-h-[123px]"
                      />
                    </div>
                  </div>
                  <div className="w-full space-y-4">
                    <label htmlFor="attachment">Attachment</label>
                    <div className="flex rounded-3xl border  items-center text-sm p-0 focus-within:border-foreground shadow-sm h-[58px] justify-center text-muted-foreground  outline-1 outline-dotted">
                      <Plus />
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <Button>SUBMIT</Button>
                    <Button className="bg-muted-foreground">CANCEL</Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div>
        <h1 className="font-semibold text-2xl ">Complaints</h1>
        <p className="text-muted-foreground">Lorem ipsum dolor sit amit</p>
      </div>

      <section>
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
    </div>
  );
};

export default Complaints;
