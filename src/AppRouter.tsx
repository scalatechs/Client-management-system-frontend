import { BrowserRouter as Router, Routes, Route } from "react-router";

import AuthPage from "./pages/Auth";
import Dashboard from "./pages/clientPanel/Dashboard";
import DashboardLayout from "./components/layouts/DashboardLayout";
import Timeline from "./pages/clientPanel/timeline/Timeline";
import ChatPage from "./pages/clientPanel/Chat";
import routes from "./routes";
import ProjectOverview from "./pages/clientPanel/timeline/ProjectOverview";
import MilestoneTasks from "./pages/clientPanel/timeline/MilestoneTasks";
import Payments from "./pages/clientPanel/payments/Payments";
import PaymentMethod from "./pages/clientPanel/payments/PaymentMethod";
import Profile from "./pages/clientPanel/profile/Profile";
import PersonalInformation from "./pages/clientPanel/profile/PersonalInformation";
import Password from "./pages/clientPanel/profile/Password";
import Complaints from "./pages/clientPanel/profile/Complaints";
import MyTransactions from "./pages/clientPanel/profile/MyTransactions";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<AuthPage />} />
        <Route path={routes.auth} element={<AuthPage />} />
        <Route element={<DashboardLayout />}>
          <Route path={routes.clientPanel.dashboard} element={<Dashboard />} />
          <Route
            path={routes.clientPanel.timeline.home}
            element={<Timeline />}
          />
          <Route
            path={routes.clientPanel.timeline.project + ":projectId"}
            element={<ProjectOverview />}
          />
          <Route
            path={
              routes.clientPanel.timeline.project +
              ":projectId/milestone-tasks/:milestoneId"
            }
            element={<MilestoneTasks />}
          />
          <Route path={routes.clientPanel.chats} element={<ChatPage />} />
          <Route path={routes.clientPanel.payments} element={<Payments />} />
          <Route
            path={routes.clientPanel.payment + ":paymentId"}
            element={<PaymentMethod />}
          />
          <Route
            path={routes.clientPanel.profile.profile}
            element={<Profile />}
          >
            <Route
              path={routes.clientPanel.profile.personalInfo}
              element={<PersonalInformation />}
            />
            <Route
              path={routes.clientPanel.profile.password}
              element={<Password />}
            />
            <Route
              path={routes.clientPanel.profile.complaints}
              element={<Complaints />}
            />
            <Route
              path={routes.clientPanel.profile.myTransactions}
              element={<MyTransactions />}
            />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
