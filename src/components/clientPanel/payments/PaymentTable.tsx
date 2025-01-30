import { GoFilter } from "react-icons/go";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import useSortableTable from "@/hooks/useSortTable";
import { payments as initialPayments } from "@/constants/data";
import clsx from "clsx";
import { Link } from "react-router";
import routes from "@/routes";

const PaymentTable = () => {
  const {
    data: payments,
    sortTable,
    sortConfig,
  } = useSortableTable(initialPayments); // Use the custom hook

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
      {/* Table for medium + devices */}
      <table
        className="min-w-full border-separate hidden md:table"
        style={{ borderSpacing: "0 10px" }}
      >
        <thead>
          <tr className="text-[#B3B3B3]">
            <th className="py-2 px-4 text-left font-normal">Invoice ID</th>
            <th className="py-2 px-4 text-left font-normal">Project Name</th>
            {(
              ["dateIssued", "dueDate", "status"] as Array<keyof PaymentType>
            ).map((key, index) => (
              <th
                key={index}
                className="py-2 px-4 text-left cursor-pointer font-normal"
                onClick={() => sortTable(key)}
              >
                <div className="flex items-center gap-2">
                  {key === "dateIssued" && "Date Issued"}
                  {key === "dueDate" && "Due Date"}
                  {key === "status" && "Status"}
                  {getSortIcon(key)}
                </div>
              </th>
            ))}
            <th className="py-2 px-4 text-left font-normal">Price</th>
            <th className="py-2 px-4 text-left font-normal">Action</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr
              key={index}
              className="bg-[#F8F8F8] hover:bg-gray-100"
              style={{ borderRadius: "8px", overflow: "hidden" }}
            >
              <td className="py-8 px-4 border-l border-t border-b  rounded-l-lg">
                {payment.invoiceId}
              </td>
              <td className="py-8 px-4 border-t border-b ">
                {payment?.project?.name}
              </td>
              <td className="py-8 px-4 border-t border-b ">
                {payment.dateIssued}
              </td>
              <td className={`py-8 px-4 border-t border-b `}>
                {payment.dueDate}
              </td>
              <td
                className={clsx(
                  "py-8 px-4 border-t border-b text-center",
                  payment.status === "Completed"
                    ? "text-primary-green"
                    : "text-priority-medium"
                )}
              >
                {payment.status}
              </td>
              <td className={`py-8 px-4 border-t border-b `}>
                {payment.dueDate}
              </td>
              <td className="py-4 px-4 border-t border-b border-r  rounded-r-lg text-primary-light">
                {payment.status === "Completed" ? (
                  <Link to={"#"}>View Receipt</Link>
                ) : (
                  <Link to={routes.clientPanel.payment + payment.id}>
                    Pay Now
                  </Link>
                )}
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

export default PaymentTable;
