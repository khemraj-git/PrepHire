import Container from "../../components/common/Container";

import UploadSection from "./sections/UploadSection";
import OverviewSection from "./sections/OverviewSection";
import AnalysisSection from "./sections/AnalysisSection";
import SkillsSection from "./sections/SkillsSection";
import SuggestionsSection from "./sections/SuggestionsSection";
import RecommendedQuestionsSection from "./sections/RecommendedQuestionsSection";

const ResumeReview = () => {
  return (
    <Container>
      <div className="space-y-10 py-8">
        <UploadSection />
        <OverviewSection />
        <AnalysisSection />
        <SkillsSection />
        <SuggestionsSection />
        <RecommendedQuestionsSection />
      </div>
    </Container>
  );
};

export default ResumeReview;