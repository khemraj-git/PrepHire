import { profileAchievements } from "../../../data/profileData";
import AchievementPreviewCard from "../components/AchievementPreviewCard";

const AchievementSection = () => {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Recent Achievements
        </h2>

        <p className="mt-2 text-slate-500">
          Celebrate your latest milestones and accomplishments.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {profileAchievements.map((achievement) => (
          <AchievementPreviewCard
            key={achievement.id}
            achievement={achievement}
          />
        ))}
      </div>
    </section>
  );
};

export default AchievementSection;