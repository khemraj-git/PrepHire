import { interviewCategories } from "../../../data/mockInterviews";
import InterviewCard from "../components/InterviewCard";

const CategoriesSection = () => {
  return (
    <section className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Explore Interview Categories
          </h2>

          <p className="mt-1 text-gray-500">
            Choose a role and start practicing with realistic interview
            questions.
          </p>
        </div>

        <button className="text-sm font-semibold text-blue-600 transition hover:text-blue-700">
          Browse All
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {interviewCategories.map((interview) => (
          <InterviewCard
            key={interview.id}
            interview={interview}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;