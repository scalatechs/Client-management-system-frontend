import { GoFilter } from "react-icons/go";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import useSortableTable from "@/hooks/useSortTable";
import { payments as initialPayments } from "@/constants/data";
import clsx from "clsx";
import { Link } from "react-router";
import routes from "@/routes";

const MyTransactionTable = () => {
  const { data: payments } = useSortableTable(initialPayments); // Use the custom hook

  return (
    <section className="mb-8">
      {/* Table for medium + devices */}
      <table
        className="min-w-full border-separate hidden md:table"
        style={{ borderSpacing: "0 10px" }}
      >
        <thead>
          <tr className="text-[#B3B3B3]">
            <th className="py-2 px-4 text-left font-normal">ID</th>

            <th className="py-2 px-4 text-left font-normal">Date</th>
            <th className="py-2 px-4 text-left font-normal">Amount</th>
            <th className="py-2 px-4 text-left font-normal">Status</th>
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
                {payment.dateIssued}
              </td>
              <td className={`py-8 px-4 border-t border-b `}>
                {payment.price}
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

export default MyTransactionTable;
