import ResumeScoreCard from "../components/ResumeScoreCard";
import ATSScoreCard from "../components/ATSScoreCard";

const OverviewSection = () => {
  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <ResumeScoreCard />
      <ATSScoreCard />
    </section>
  );
};

export default OverviewSection;