import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import routes from "@/routes";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router";

const Password = () => {
  return (
    <div className="space-y-14 xl:w-[610px] p-2 my-auto">
      <div>
        <Link
          to={routes.clientPanel.profile.profile}
          className="block xl:hidden mb-20"
        >
          <ChevronLeft />
        </Link>
        <h1 className="font-semibold text-2xl ">Password</h1>
        <p className="text-muted-foreground">Lorem ipsum dolor sit amit</p>
      </div>
      <div className="w-full space-y-6">
        <div className="w-full space-y-4">
          <label htmlFor="current">Current Password</label>
          <div className="flex rounded-3xl border  h-[58px] items-center text-sm p-0 focus-within:border-foreground shadow-sm">
            <Input
              type={"password"}
              className="form-input border-0  pl-6 text-sm font-medium text-black placeholder:text-black"
            />
          </div>
        </div>
        <div className="w-full space-y-4">
          <label htmlFor="new-password">New Password</label>
          <div className="flex rounded-3xl border  h-[58px] items-center text-sm p-0 focus-within:border-foreground shadow-sm">
            <Input
              placeholder={""}
              type={"password"}
              className="form-input border-0  pl-6 text-black placeholder:text-black"
            />
          </div>
        </div>
        <div className="w-full space-y-4">
          <label htmlFor="confirm-password">Confirm Password</label>
          <div className="flex rounded-3xl border  h-[58px] items-center text-sm p-0 focus-within:border-foreground shadow-sm">
            <Input
              placeholder={""}
              type={"password"}
              className="form-input border-0  pl-6 text-black placeholder:text-black"
            />
          </div>
        </div>
        <Button className="bg-foreground hover:bg-primary">EDIT</Button>
      </div>
    </div>
  );
};

export default Password;
