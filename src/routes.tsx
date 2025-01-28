import { BrowserRouter as Router, Routes, Route } from "react-router";

import AuthPage from "./pages/Auth";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardLayout from "./components/layouts/DashboardLayout";
import Timeline from "./pages/dashboard/Timeline";
import ChatPage from "./pages/dashboard/Chat";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/chats" element={<ChatPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
