import { analyticsStats } from "../../../data/analyticsData";
import StatsCard from "../components/StatsCard";

const OverviewSection = () => {
  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {analyticsStats.map((item) => (
        <StatsCard
          key={item.id}
          title={item.title}
          value={item.value}
          color={item.color}
        />
      ))}
    </section>
  );
};

export default OverviewSection;