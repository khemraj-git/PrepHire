import QuestionCard from "../components/QuestionCard";

function FeaturedQuestion({ questions }) {
  const featuredQuestions = questions.filter(
    (question) => question.featured
  );

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Featured Questions
        </h2>

        <p className="mt-2 text-slate-500">
          Hand-picked interview questions frequently asked by top companies.
        </p>
      </div>

      {featuredQuestions.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
          No featured questions match the selected filters.
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-2">
          {featuredQuestions.map((question) => (
            <QuestionCard
              key={question.id}
              question={question}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default FeaturedQuestion;