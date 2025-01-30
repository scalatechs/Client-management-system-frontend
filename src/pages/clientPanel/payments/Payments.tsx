import PaymentTable from "@/components/clientPanel/payments/PaymentTable";
import { Button } from "@/components/ui/button";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Payments = () => {
  return (
    <section className="space-y-20">
      <h1 className="text-2xl font-semibold">My Payments</h1>
      <div className="flex flex-col gap-6">
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
        <PaymentTable />
      </div>
    </section>
  );
};

export default Payments;
