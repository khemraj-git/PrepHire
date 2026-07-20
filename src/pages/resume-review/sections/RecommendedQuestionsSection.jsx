import { recommendedQuestions } from "../../../data/resumeData";
import RecommendedQuestionCard from "../components/RecommendedQuestionCard";

const RecommendedQuestionsSection = () => {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Recommended Interview Questions
        </h2>

        <p className="mt-1 text-slate-500">
          Practice these questions based on your resume analysis.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {recommendedQuestions.map((question) => (
          <RecommendedQuestionCard
            key={question.id}
            question={question}
          />
        ))}
      </div>
    </section>
  );
};

export default RecommendedQuestionsSection;