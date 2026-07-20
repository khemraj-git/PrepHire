import { achievements } from "../../../data/analyticsData";
import AchievementCard from "../components/AchievementCard";

const AchievementSection = () => {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        Achievements
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {achievements.map((achievement) => (
          <AchievementCard
            key={achievement.id}
            achievement={achievement}
          />
        ))}
      </div>
    </section>
  );
};

export default AchievementSection;