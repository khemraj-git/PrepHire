import { profileStats } from "../../../data/profileData";
import QuickStatsCard from "../components/QuickStatsCard";

const StatsSection = () => {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Quick Statistics
        </h2>

        <p className="mt-2 text-slate-500">
          A quick overview of your preparation progress.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {profileStats.map((stat) => (
          <QuickStatsCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
          />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;