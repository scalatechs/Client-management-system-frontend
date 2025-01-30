import { useParams } from "react-router";
import { payments } from "@/constants/data";
import { Card } from "@/components/ui/card";
import { BsThreeDots } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const PaymentMethod = () => {
  const { paymentId } = useParams();
  const payment = payments.find((payment) => payment.id === paymentId);

  return (
    <section className="space-y-16 xl:p-4 ">
      <h1 className="text-2xl font-semibold">Payment Method</h1>
      <div className="grid xl:grid-cols-2 gap-6">
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold text-black">Confirm & Review</h2>
          <div className="flex flex-col gap-10">
            <Card className="rounded-3xl overflow-hidden">
              <div className="p-6 space-y-2">
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <h3 className="text-base font-medium  leading-tight">
                      {payment?.project.name}
                    </h3>
                    <span className="text-[10px] font-normal text-black/50">
                      {payment?.invoiceId}
                    </span>
                  </div>
                  <span className="text-base font-normal">$ 300.00</span>
                </div>
                <hr />
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <h3 className="text-base font-medium  leading-tight">
                      {payment?.project.name}
                    </h3>
                    <span className="text-[10px] font-normal text-black/50">
                      {payment?.invoiceId}
                    </span>
                  </div>
                  <span className="text-base font-normal">$ 300.00</span>
                </div>
                <hr />
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <h3 className="text-base font-medium leading-tight">
                      {payment?.project.name}
                    </h3>
                    <span className="text-[10px] font-normal text-black/50">
                      {payment?.invoiceId}
                    </span>
                  </div>
                  <span className="text-base font-normal">$ 300.00</span>
                </div>
              </div>
              <div className="flex flex-col items-center bg-primary-foreground p-6">
                <h2 className="text-base font-medium">Your Total Payment</h2>
                <h1 className="text-[28px] font-semibold">$900.00</h1>
                <p className="text-xs font-normal text-black/60">
                  Pay before January 15, 10:45 PM
                </p>
              </div>
            </Card>
            <div>
              <h2 className="font-semibold text-xl text-black">
                Select Method
              </h2>
              <div className="p-3 bg-primary-foreground text-black ">
                <div className="flex justify-between items-center p-3">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <input
                      type="radio"
                      id="wise"
                      name="payment-method"
                      defaultChecked={true}
                    />
                    <label htmlFor="wise">Wise</label>
                  </div>
                  <div className="flex gap-3 items-center">
                    <img src="/assets/wise-small.png" alt="wise" />
                    <BsThreeDots />
                  </div>
                </div>
                <hr />
                <div className="flex justify-between items-center p-3">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <input type="radio" id="stripe" name="payment-method" />
                    <label htmlFor="stripe">Stripe</label>
                  </div>
                  <div className="flex gap-3 items-center">
                    <img src="/assets/stripe-small.png" alt="wise" />
                    <BsThreeDots />
                  </div>
                </div>
              </div>
              <div className="flex gap-6 p-6">
                <div className="relative bg-white w-[153px] h-[105px] border border-primary flex items-center justify-center rounded-3xl">
                  <img src="/assets/wise-large.png" alt="wise" />
                  <FaCheckCircle className="absolute -top-[2.46px] -right-[2.46px] bg-white rounded-full  border-[1.64px] h-[19.71px] w-[19.71px] text-primary" />
                </div>
                <div className="relative bg-white w-[153px] h-[105px] border border-black/40 flex items-center justify-center rounded-3xl">
                  <img src="/assets/stripe-large.png" alt="wise" />
                </div>
              </div>
              <hr />
              <div className="flex justify-between items-center p-3">
                <div className="flex items-center gap-2 text-sm font-medium text-black">
                  <input type="radio" id="credit-card" name="payment-method" />
                  <label htmlFor="credit-card">Credit Card</label>
                </div>
                <div className="flex gap-3 items-center">
                  <img src="/assets/credit-card.png" alt="wise" />
                  <BsThreeDots />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold text-black">
            Fill Payment Details
          </h2>
          <div>
            <Card className="py-8 px-4">
              <form action="" className="flex flex-col items-center gap-6">
                <div className="space-y-4 w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-medium text-muted-foreground"
                  >
                    Receiver's Account Number
                  </label>
                  <div className="flex rounded-3xl border  h-[58px] items-center text-sm p-0 focus-within:border-foreground shadow-sm">
                    <Input
                      placeholder={"xxxx-xxxx-xxxx-xxxx"}
                      type={"text"}
                      className="form-input border-0  pl-6 text-black placeholder:text-black"
                    />
                  </div>
                </div>
                <div className="space-y-4 w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-medium text-muted-foreground"
                  >
                    Receiver's Account Name
                  </label>
                  <div className="flex rounded-3xl border  h-[58px] items-center text-sm p-0 focus-within:border-foreground shadow-sm">
                    <Input
                      placeholder={"Account Name"}
                      type={"text"}
                      className="form-input border-0  pl-6 text-black placeholder:text-black"
                    />
                  </div>
                </div>
                <div className="space-y-4 w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-medium text-muted-foreground"
                  >
                    Amount
                  </label>
                  <div className="flex rounded-3xl border  h-[58px] items-center text-sm p-0 focus-within:border-foreground shadow-sm">
                    <Input
                      placeholder={"$ 00.00"}
                      type={"text"}
                      className="form-input border-0  pl-6 text-black placeholder:text-black"
                    />
                  </div>
                </div>
                <div className="space-y-4 w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-medium text-muted-foreground"
                  >
                    Remarks
                  </label>
                  <div className="flex rounded-3xl border  h-[58px] items-center text-sm p-0 focus-within:border-foreground shadow-sm">
                    <Input
                      placeholder={"Add Remarks"}
                      type={"text"}
                      className="form-input border-0  pl-6 text-black placeholder:text-black"
                    />
                  </div>
                </div>
                <Button className="w-[170px] p-0 hover:w-[196px] transition-all">
                  MAKE PAYMENT
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethod;
