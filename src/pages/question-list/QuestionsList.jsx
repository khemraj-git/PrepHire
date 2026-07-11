import { Link, useParams } from "react-router-dom";
import { allQuestions } from "../../data/questionBank";

function QuestionsList() {
  const { category } = useParams();

  const questions = allQuestions.filter(
    (question) =>
      question.category.toLowerCase().replace(/\s+/g, "-") === category
  );

  return (
 <div className="space-y-8 p-6">

    <div>
      <Link
        to="/dashboard/question-bank"
        className="font-medium text-blue-600 hover:text-blue-700"
      >
        ← Back to Question Bank
      </Link>

      <h1 className="mt-4 text-4xl font-bold text-slate-900 capitalize">
        {category.replace("-", " ")} Interview Questions
      </h1>

      <p className="mt-2 text-slate-500">
        Practice the most frequently asked interview questions.
      </p>
    </div>  
<div className="mt-8 space-y-5">
  {questions.map((question) => (
    <div
      key={question.id}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            {question.title}
          </h2>

          <p className="mt-2 text-slate-600">
            {question.shortDescription}
          </p>

          <div className="mt-4 flex gap-6 text-sm text-slate-500">
            <span>📚 {question.topic}</span>
            <span>⏱ {question.time}</span>
            <span>⭐ {question.difficulty}</span>
          </div>
        </div>

        <Link
          to={`/dashboard/question-bank/${category}/${question.slug}`}
          className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Read Details
        </Link>
      </div>
    </div>
  ))}
</div>
</div>
  );
}

export default QuestionsList;