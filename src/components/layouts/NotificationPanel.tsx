import BellIcon from "../../../public/assets/dash-icons/BellIcon";
import { MouseEvent, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

const NotificationPanel = () => {
  const notifications = [
    {
      heading: "Milestone Completed:User Feedback Approved",
      time: "January 10, 2024 at 3:00 pm",
      type: "milestone",
      read: false,
    },
    {
      heading: "Milestone Completed:User Feedback Approved",
      time: "January 10, 2024 at 3:00 pm",
      type: "task",
      read: true,
    },
    {
      heading: "Milestone Completed:User Feedback Approved",
      time: "January 10, 2024 at 3:00 pm",
      type: "milestone",
      read: true,
    },
    {
      heading: "Milestone Completed:User Feedback Approved",
      time: "January 10, 2024 at 3:00 pm",
      type: "milestone",
      read: false,
    },
  ];

  const [open, setOpen] = useState<boolean>(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent<HTMLDivElement>) => {
    if (overlayRef.current && event.target === overlayRef.current) {
      setOpen(false);
    }
  };
  return (
    <>
      <div className="relative">
        <span onClick={() => setOpen(true)} className="cursor-pointer">
          <BellIcon />
        </span>

        <span className="absolute top-0 -right-1 inline-flex items-center justify-center w-3 h-3 font-bold text-white bg-red-500 rounded-full"></span>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            ref={overlayRef}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClickOutside}
          >
            <motion.div
              className="absolute flex flex-col gap-10 top-20 right-20 bg-white p-8 rounded-2xl shadow-xl max-w-2xl overflow-y-auto max-h-[767px] w-full"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="flex justify-between items-center border-b p-4">
                <div className="flex items-center gap-4 ">
                  <h2 className="text-2xl font-semibold">Notifications</h2>
                  <span className="h-10 w-10 rounded-full border border-primary text-primary bg-[#4A90E233] flex items-center justify-center">
                    28
                  </span>
                </div>
                <p className="text-primary-light text-base font-medium">
                  Mark All as Read
                </p>
              </div>
              <div>
                {notifications.map((noti, index) => (
                  <div
                    key={index}
                    className={clsx(
                      "flex items-center justify-between  p-4 border-b ",
                      noti.read ? "" : "bg-[#4A90E233] border-primary-light"
                    )}
                  >
                    <div className=" flex flex-col gap-4">
                      <h3 className="text-lg font-medium">{noti.heading}</h3>
                      <p className="text-muted-foreground text-base">
                        {noti.time}
                      </p>
                      <p className="text-primary">
                        {noti.type === "milestone"
                          ? "Milestone Update"
                          : "Task Update"}
                      </p>
                    </div>
                    {!noti.read && (
                      <span className="w-3 h-3 bg-primary rounded-full inline-flex"></span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NotificationPanel;
