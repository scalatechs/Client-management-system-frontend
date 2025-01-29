import { Outlet } from "react-router";
import { TfiClip } from "react-icons/tfi";

import DashboardHeader from "./DashboardHeader";
import DashboardNav, { DashboardNavMobile } from "./DashboardNav";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen  max-w-[2000px] mx-auto">
      {/* side nav */}
      <DashboardNav />
      <div className="flex flex-col flex-1">
        <DashboardHeader />
        <main className="flex-1 p-6 overflow-y-auto rounded-3xl bg-primary-foreground">
          <Outlet />
          <div className="fixed xl:bottom-12 xl:right-12 bottom-24 right-6">
            <Dialog>
              <DialogTrigger className="h-[88px] w-[88px] bg-primary rounded-full border-[#002FC3] border-[5px] md:flex items-center justify-center hidden">
                <img src="/assets/chatbot.png" alt="chatbot" />
              </DialogTrigger>
              <DialogContent className="xl:top-[45%] xl:left-[78%]  top-[47%]  left-[63%]  md:w-[664px] w-[300px] p-0 !rounded-3xl border-none gap-6 hidden md:block max-h-fit">
                <DialogTitle className="hidden">Chatbot</DialogTitle>
                <div className="bg-primary py-6 px-4 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-full w-fit">
                    <img src="/assets/chatbot-blue.png" alt="chatbot" />
                  </div>
                </div>

                <div className="p-6 space-y-12">
                  <div className="flex w-full gap-2">
                    <div className="h-[50px] w-[50px] bg-primary rounded-full  flex items-center justify-center self-start">
                      <img
                        src="/assets/chatbot.png"
                        alt="chatbot"
                        className="h-[18px]"
                      />
                    </div>
                    <p className=" rounded-3xl max-w-[285px] w-fit bg-secondary py-6 px-4 text-foreground font-medium ">
                      Hello, I am a Chatbot. You can ask anything or request
                      human help anytime!
                    </p>
                  </div>
                  <p className=" rounded-3xl max-w-[285px] w-fit bg-primary text-white py-6 px-4 text-foreground font-medium self-end ml-auto">
                    Hello, I want human help!
                  </p>
                  <p className="text-center text-muted-foreground text-base font-medium w-fit p-0">
                    Your query requires further assistance. The chatbot has
                    escalated your chat to a live Customer Representative.
                    Please wait while we connect you.
                  </p>
                  <div className="flex flex-col gap-4 items-center w-full">
                    <div>
                      <span className="p-4 bg-primary text-white rounded-3xl">
                        Lorem Ipsum
                      </span>
                      <span className="p-4 bg-primary text-white rounded-3xl">
                        Lorem Ipsum
                      </span>
                      <span className="p-4 bg-primary text-white rounded-3xl">
                        Lorem Ipsum
                      </span>
                    </div>
                    <div className="flex gap-2 items-center w-full">
                      <div className="w-[58px] h-[59px] bg-primary rounded-3xl flex items-center justify-center">
                        <TfiClip
                          className="-scale-y-100"
                          size={30}
                          color="white"
                        />
                      </div>
                      <Input
                        className="flex-1 h-[58px] rounded-3xl text-sm font-normal"
                        placeholder="SEND MESSAGE..."
                      />
                      <div className="w-[58px] h-[59px] bg-primary rounded-3xl flex items-center justify-center">
                        <TfiClip
                          className="-scale-y-100"
                          size={30}
                          color="white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </main>
        <DashboardNavMobile />
      </div>
    </div>
  );
};

export default DashboardLayout;
