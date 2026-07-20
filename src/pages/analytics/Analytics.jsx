import Container from "../../components/common/Container";

import AnalyticsHeader from "./components/AnalyticsHeader";

import OverviewSection from "./sections/OverviewSection";
import ChartsSection from "./sections/ChartsSection";
import ActivitySection from "./sections/ActivitySection";
import AchievementSection from "./sections/AchievementSection";

const Analytics = () => {
  return (
    <Container>
      <div className="space-y-10 py-8">
        <AnalyticsHeader />

        <OverviewSection />

        <ChartsSection />

        <ActivitySection />

        <AchievementSection />
      </div>
    </Container>
  );
};

export default Analytics;