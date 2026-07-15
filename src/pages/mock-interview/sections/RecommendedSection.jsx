import { recommendedInterviews } from "../../../data/mockInterviews";
import InterviewCard from "../components/InterviewCard";

const RecommendedSection = () => {
  return (
    <section className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Recommended Interviews
          </h2>

          <p className="mt-1 text-gray-500">
            Personalized interview recommendations based on your progress.
          </p>
        </div>

        <button className="text-sm font-semibold text-blue-600 transition hover:text-blue-700">
          View All
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {recommendedInterviews.map((interview) => (
          <InterviewCard
            key={interview.id}
            interview={interview}
            recommended
          />
        ))}
      </div>
    </section>
  );
};

export default RecommendedSection;