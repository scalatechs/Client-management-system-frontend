import React, { useState } from "react";

const SectionContainer = ({
  children,
  isSelected,
  onClick,
}: {
  children: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`h-[118px] w-full flex gap-4 items-center border-l-[3px] ${
        isSelected ? "border-blue-500  bg-[#FCFCFC]" : "border-transparent"
      } py-6 px-4 cursor-pointer`}
    >
      {children}
    </div>
  );
};

const Profile = () => {
  const [selectedControl, setSelectedControl] = useState<string | null>(
    "personalInformation1"
  );

  const sections = [
    {
      id: "personalInformation1",
      title: "Personal Information",
      desc: "Lorem ipsum dolor sit amit",
      icon: "/assets/icons/user-icon.png",
    },
    {
      id: "password",
      title: "Password",
      desc: "Lorem ipsum dolor sit amit",
      icon: "/assets/icons/lock-icon.png",
    },
    {
      id: "complaints",
      title: "Complaints",
      desc: "Lorem ipsum dolor sit amit",
      icon: "/assets/icons/comments-icon.png",
    },
    {
      id: "myTransactions",
      title: "My Transactions",
      desc: "Lorem ipsum dolor sit amit",
      icon: "/assets/icons/transaction.png",
    },
  ];

  return (
    <section className="p-4">
      <div className="bg-white flex rounded-3xl p-6 items-center flex-col w-[445px] gap-12">
        <div className="space-y-6 text-center">
          <img src="/assets/user-profile.png" alt="user profile" />
          <h1 className="text-2xl font-semibold text-foreground">
            Hanna Baker
          </h1>
        </div>
        <div className="w-full">
          {sections.map((section) => (
            <SectionContainer
              key={section.id}
              isSelected={selectedControl === section.id}
              onClick={() => setSelectedControl(section.id)}
            >
              <img src={section.icon} />
              <div>
                <h2 className="text-xl font-medium">{section.title}</h2>
                <p>{section.desc}</p>
              </div>
            </SectionContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profile;
