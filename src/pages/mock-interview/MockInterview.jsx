import {
  recentInterviews,
} from "../../data/mockInterviews";

import InterviewHeader from "./components/InterviewHeader";
import InterviewStats from "./components/InterviewStats";
// import InterviewCard from "./components/InterviewCard";
import RecentInterviews from "./components/RecentInterviews";
import ContinueInterviewBanner from "./components/ContinueInterviewBanner";
import RecommendedSection from "./sections/RecommendedSection";
import CategoriesSection from "./sections/CategoriesSection";


const MockInterview = () => {
  return (
    <div className="space-y-8">

      {/* Header */}
      <InterviewHeader />

      {/* Stats */}
      <InterviewStats />

      {/* Continue Interview */}
      <ContinueInterviewBanner />

      {/* Recommended */}
      <RecommendedSection />

      {/* Categories */}
      <CategoriesSection />
      {/* Recent Interviews */}
      <RecentInterviews />

    </div>
  );
};

export default MockInterview;