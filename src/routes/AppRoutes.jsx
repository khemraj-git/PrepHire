import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Home from "../pages/home/Home";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import Dashboard from "../pages/dashboard/Dashboard";
import QuestionBank from "../pages/question-bank/QuestionBank";

import QuestionList from "../pages/question-list/QuestionsList";
import QuestionDetails from "../pages/question-details/QuestionDetails";
import CodingPractice from "../pages/coding-practice/CodingPractice";

function AppRoutes() {
  return (
    <Routes>
      {/* Landing */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />

        <Route path="question-bank" element={<QuestionBank />} />

        <Route
          path="question-bank/:category"
          element={<QuestionList />}
        />

        <Route
          path="question-bank/:category/:slug"
          element={<QuestionDetails />}
        />

        <Route
          path="coding-practice/:slug"
          element={<CodingPractice />}
        />
      </Route>
    </Routes>
  );
}

export default AppRoutes;