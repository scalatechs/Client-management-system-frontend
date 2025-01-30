import { Link } from "react-router";
import MyTransactionTable from "../../../components/clientPanel/profile/MyTransactionTable";
import routes from "@/routes";
import { ChevronLeft } from "lucide-react";

const MyTransactions = () => {
  return (
    <div className="space-y-14 xl:w-[610px] p-2">
      <div>
        <div className="flex">
          <Link
            to={routes.clientPanel.profile.profile}
            className="block xl:hidden"
          >
            <ChevronLeft />
          </Link>
          <div>
            <h1 className="font-semibold text-2xl ">My Transactions</h1>
            <p className="text-muted-foreground">Lorem ipsum dolor sit amit</p>
          </div>
        </div>
      </div>
      <MyTransactionTable />
    </div>
  );
};

export default MyTransactions;
