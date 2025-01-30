import { TfiClip } from "react-icons/tfi";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";

const ChatBot = () => {
  return (
    <div className="fixed xl:bottom-12 xl:right-12 bottom-16 right-4">
      <Dialog>
        <DialogTrigger className="h-[70px] w-[70px] md:h-[88px] md:w-[88px] bg-primary rounded-full border-[#002FC3] border-[5px] flex items-center justify-center">
          <img
            src="/assets/chatbot.png"
            alt="chatbot"
            className="h-[40px] md:h-auto"
          />
        </DialogTrigger>

        <DialogContent className="fixed md:absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:top-[53%] md:left-[65%] xl:top-[45%] xl:left-[80%] w-[90%] md:w-[664px] p-0 !rounded-3xl border-none max-h-[90%] flex flex-col">
          <DialogTitle className="hidden">Chatbot</DialogTitle>

          {/* Top Bar */}
          <div className="bg-primary py-4 md:py-6 px-4 flex items-center justify-center sticky top-0 z-10">
            <div className="bg-white p-4 md:p-6 rounded-full w-fit">
              <img
                src="/assets/chatbot-blue.png"
                alt="chatbot"
                className="h-[30px] md:h-auto"
              />
            </div>
          </div>

          {/* Message Section */}
          <div className="p-4 md:p-6 space-y-8 md:space-y-12 flex-1 overflow-y-auto">
            <div className="w-full">
              <div className="flex gap-2">
                <div className="h-[40px] w-[40px] md:h-[50px] md:w-[50px] bg-primary rounded-full flex items-center justify-center self-start">
                  <img
                    src="/assets/chatbot.png"
                    alt="chatbot"
                    className="h-[14px] md:h-[18px]"
                  />
                </div>
                <p className="rounded-3xl max-w-[240px] md:max-w-[285px] w-fit bg-secondary py-4 md:py-6 px-3 md:px-4 text-foreground font-medium">
                  Hello, I am a Chatbot. You can ask anything or request human
                  help anytime!
                </p>
              </div>
              <p className="rounded-3xl max-w-[240px] md:max-w-[285px] w-fit bg-primary text-white py-4 md:py-6 px-3 md:px-4 text-foreground font-medium self-end ml-auto">
                Hello, I want human help!
              </p>
              <p className="text-center text-muted-foreground text-sm md:text-base font-medium w-fit p-0">
                Your query requires further assistance. The chatbot has
                escalated your chat to a live Customer Representative. Please
                wait while we connect you.
              </p>
            </div>
          </div>

          {/* Input Section */}
          <div className="flex gap-2 items-center w-full p-4 md:p-6 sticky bottom-0 bg-white z-10 flex-col">
            <div className="flex items-start gap-2">
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
            <div className="flex w-full gap-2">
              <div className="w-[48px] h-[48px] md:w-[58px] md:h-[59px] bg-primary rounded-3xl flex items-center justify-center">
                <TfiClip className="-scale-y-100" size={24} color="white" />
              </div>
              <Input
                className="flex-1 h-[48px] md:h-[58px] rounded-3xl text-sm font-normal"
                placeholder="SEND MESSAGE..."
              />
              <div className="w-[48px] h-[48px] md:w-[58px] md:h-[59px] bg-primary rounded-3xl flex items-center justify-center">
                <TfiClip className="-scale-y-100" size={24} color="white" />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ChatBot;
