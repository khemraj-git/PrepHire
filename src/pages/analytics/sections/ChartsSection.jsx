import ProgressChart from "../components/ProgressChart";
import WeeklyActivity from "../components/WeeklyActivity";
import TopicDistribution from "../components/TopicDistribution";
import InterviewPerformance from "../components/InterviewPerformance";

const ChartsSection = () => {
  return (
    <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <ProgressChart />

      <WeeklyActivity />

      <TopicDistribution />

      <InterviewPerformance />
    </section>
  );
};

export default ChartsSection;