import { recentActivities } from "../../../data/analyticsData";
import RecentActivityCard from "../components/RecentActivityCard";

const ActivitySection = () => {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        Recent Activity
      </h2>

      <div className="space-y-4">
        {recentActivities.map((activity) => (
          <RecentActivityCard
            key={activity.id}
            activity={activity}
          />
        ))}
      </div>
    </section>
  );
};

export default ActivitySection;