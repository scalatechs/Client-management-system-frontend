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
    profile: "/profile",
  },
};

export default routes;
