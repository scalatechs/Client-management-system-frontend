import { BrowserRouter as Router, Routes, Route } from "react-router";

import AuthPage from "./pages/Auth";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
