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

import MockInterview from "../pages/mock-interview/MockInterview";
import SetupForm from "../pages/mock-interview/components/SetupForm";
import InstructionsCard from "../pages/mock-interview/components/InstructionsCard";
import QuestionPanel from "../pages/mock-interview/components/QuestionPanel";
import FeedbackCard from "../pages/mock-interview/components/FeedbackCard";
// import InstructionsCard from "../pages/mock-interview/components/InstructionsCard";
import InterviewHistory from "../pages/mock-interview/InterviewHistory";

import ResumeReview from "../pages/resume-review/ResumeReview";
import ResumeAnalysis from "../pages/resume-review/ResumeAnalysis";




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

        <Route
          path="mock-interview"
          element={<MockInterview />}
        />

        <Route
            path="mock-interview/setup"
            element={<SetupForm />}
        />

        <Route
            path="mock-interview/instructions"
            element={<InstructionsCard />}
        />

        <Route
            path="mock-interview/session"
            element={<QuestionPanel />}
        />

        <Route
            path="mock-interview/feedback"
            element={<FeedbackCard />}
        />

        <Route
          path="mock-interview/history"
          element={<InterviewHistory />}
        />

        <Route 
          path="resume-review" 
          element={<ResumeReview />} 
        />
        
        <Route 
          path="resume-review/analysis" 
          element={<ResumeAnalysis />} 
        />

      </Route>
    </Routes>
  );
}

export default AppRoutes;