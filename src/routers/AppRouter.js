import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import LogIn from "../pages/public/login";
import SignUp from "../pages/public/signup";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route exact path="/login" element={<LogIn />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route path="*" element={<Navigate to="/signup" />} />
    </Routes>
  </Router>
);

export default AppRouter;
