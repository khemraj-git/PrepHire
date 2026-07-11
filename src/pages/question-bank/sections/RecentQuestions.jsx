import QuestionRow from "../components/QuestionRow";

function RecentQuestions({ questions }) {
  const recentQuestions = questions.filter(
    (question) => question.recent
  );

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Recent Questions
        </h2>

        <p className="mt-2 text-slate-500">
          Recently added interview questions across different domains.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        {recentQuestions.length === 0 ? (
          <div className="p-8 text-center text-slate-500">
            No recent questions match the selected filters.
          </div>
        ) : (
          recentQuestions.map((question) => (
            <QuestionRow
              key={question.id}
              question={question}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default RecentQuestions;