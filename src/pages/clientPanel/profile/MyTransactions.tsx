import MyTransactionTable from "../../../components/clientPanel/profile/MyTransactionTable";

const MyTransactions = () => {
  return (
    <div className="space-y-14 w-[610px]">
      <div>
        <h1 className="font-semibold text-2xl ">My Transactions</h1>
        <p className="text-muted-foreground">Lorem ipsum dolor sit amit</p>
      </div>
      <MyTransactionTable />
    </div>
  );
};

export default MyTransactions;
