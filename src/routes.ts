const routes = {
  auth: "/auth",
  clientPanel: {
    dashboard: "/dashboard",
    timeline: {
      home: "/timeline",
      project: "/timeline/project/",
      // projectMilestoneTasks: "/timeline/project/:projectId/milestone-tasks/",
    },
    chats: "/chats",
    payments: "/payments",
    payment: "/payments/payment-now/",
    profile: {
      profile: "/profile",
      personalInfo: "/profile/personalInfo",
      password: "/profile/password",
      complaints: "/profile/complaints",
      myTransactions: "/profile/myTransactions",
    },
  },
};

export default routes;
