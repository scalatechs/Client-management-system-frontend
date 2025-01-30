import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import routes from "@/routes";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router";

const PersonalInformation = () => {
  return (
    <div className="space-y-14 xl:w-[610px] p-2">
      <div>
        <Link
          to={routes.clientPanel.profile.profile}
          className="block xl:hidden mb-20"
        >
          <ChevronLeft />
        </Link>
        <h1 className="font-semibold text-2xl ">Personal Information</h1>
        <p className="text-muted-foreground">Lorem ipsum dolor sit amit</p>
      </div>
      <div className="w-full space-y-6">
        <div className="w-full space-y-4">
          <label htmlFor="full-name">Full Name</label>
          <div className="flex rounded-3xl border  h-[58px] items-center text-sm p-0 focus-within:border-foreground shadow-sm">
            <Input
              placeholder={"Full Name"}
              value={"Hannah Baker"}
              type={"text"}
              className="form-input border-0  pl-6 text-black placeholder:text-black"
            />
          </div>
        </div>
        <div className="w-full space-y-4">
          <label htmlFor="email">Email</label>
          <div className="flex rounded-3xl border  h-[58px] items-center text-sm p-0 focus-within:border-foreground shadow-sm">
            <Input
              placeholder={""}
              type={"text"}
              className="form-input border-0  pl-6 text-black placeholder:text-black"
            />
          </div>
        </div>
        <div className="w-full space-y-4">
          <label htmlFor="phone">Phone</label>
          <div className="flex rounded-3xl border  h-[58px] items-center text-sm p-0 focus-within:border-foreground shadow-sm">
            <Input
              placeholder={""}
              type={"text"}
              className="form-input border-0  pl-6 text-black placeholder:text-black"
            />
          </div>
        </div>
        <Button className="bg-foreground hover:bg-primary">EDIT</Button>
      </div>
    </div>
  );
};

export default PersonalInformation;
