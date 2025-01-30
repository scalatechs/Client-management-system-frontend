import routes from "@/routes";
import { ChevronRight } from "lucide-react";

import React from "react";
import { NavLink, Outlet } from "react-router";

const SectionContainer = ({
  link,
  children,
}: {
  link: string;
  children: React.ReactNode;
}) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        `h-[118px] w-full flex gap-4 items-center xl:border-l-[3px]  border-b xl:border-b-0 ${
          isActive
            ? "border-blue-500  xl:bg-[#FCFCFC]"
            : "xl:border-transparent"
        } py-6 px-4 cursor-pointer border-[#E0E0E0] `
      }
    >
      {children}
    </NavLink>
  );
};

const Profile = () => {
  const sections = [
    {
      id: "personalInformation",
      title: "Personal Information",
      desc: "Lorem ipsum dolor sit amit",
      icon: "/assets/icons/user-icon.png",
      link: routes.clientPanel.profile.personalInfo,
    },
    {
      id: "password",
      title: "Password",
      desc: "Lorem ipsum dolor sit amit",
      icon: "/assets/icons/lock-icon.png",
      link: routes.clientPanel.profile.password,
    },
    {
      id: "complaints",
      title: "Complaints",
      desc: "Lorem ipsum dolor sit amit",
      icon: "/assets/icons/comments-icon.png",
      link: routes.clientPanel.profile.complaints,
    },
    {
      id: "myTransactions",
      title: "My Transactions",
      desc: "Lorem ipsum dolor sit amit",
      icon: "/assets/icons/transaction.png",
      link: routes.clientPanel.profile.myTransactions,
    },
  ];

  return (
    <>
      <section className="p-4 hidden xl:flex gap-[82px] items-center">
        {/* Selection section */}
        <div className="bg-white flex rounded-3xl p-6 items-center flex-col w-[445px] gap-12">
          <div className="space-y-6 text-center">
            <img src="/assets/user-profile.png" alt="user profile" />
            <h1 className="text-2xl font-semibold text-foreground">
              Hanna Baker
            </h1>
          </div>
          <div className="w-full">
            {sections.map((section) => (
              <SectionContainer key={section.id} link={section?.link}>
                <img src={section.icon} />
                <div>
                  <h2 className="text-xl font-medium">{section.title}</h2>
                  <p>{section.desc}</p>
                </div>
              </SectionContainer>
            ))}
          </div>
        </div>

        {/* react router outlet for profile layout */}
        <Outlet />
      </section>

      {/* profile page for small devices */}
      <section className="flex xl:hidden items-center md:w-full justify-center">
        {/* Selection section */}
        <div className="flex rounded-3xl p-6 items-center flex-col  gap-12">
          <div className="space-y-6 text-center">
            <img src="/assets/user-profile.png" alt="user profile" />
            <h1 className="text-2xl font-semibold text-foreground">
              Hanna Baker
            </h1>
          </div>
          <div className="w-full">
            {sections.map((section) => (
              <SectionContainer key={section.id} link={section?.link}>
                <img src={section.icon} />
                <div>
                  <h2 className="text-xl font-medium">{section.title}</h2>
                  <p>{section.desc}</p>
                </div>
                <ChevronRight />
              </SectionContainer>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
