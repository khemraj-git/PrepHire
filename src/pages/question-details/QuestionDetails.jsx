import { Link, useParams } from "react-router-dom";
import { allQuestions } from "../../data/questionBank";

function QuestionDetails() {
  const { slug } = useParams();

  const question = allQuestions.find(
    (item) => item.slug === slug
  );

  if (!question) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold">
          Question Not Found
        </h2>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-6">

      <Link
        to={`/dashboard/question-bank/${question.category
          .toLowerCase()
          .replace(/\s+/g, "-")}`}
        className="font-medium text-blue-600 hover:text-blue-700"
      >
        ← Back to Questions
      </Link>

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

        <div className="flex flex-wrap gap-3">

          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
            {question.category}
          </span>

          <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
            {question.difficulty}
          </span>

          <span className="rounded-full bg-slate-100 px-4 py-1 text-sm font-medium text-slate-700">
            {question.time}
          </span>

        </div>

        <h1 className="mt-6 text-4xl font-bold text-slate-900">
          {question.title}
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          {question.description}
        </p>

        <div className="mt-10">
          <h2 className="mb-3 text-xl font-semibold">
            Companies Asked
          </h2>

          <div className="flex flex-wrap gap-2">
            {question.company.map((company) => (
              <span
                key={company}
                className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium"
              >
                {company}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h2 className="mb-3 text-xl font-semibold">
            Example
          </h2>

          <div className="rounded-xl bg-slate-50 p-5">

            <p>
              <strong>Input:</strong>{" "}
              {question.example.input}
            </p>

            <p className="mt-2">
              <strong>Output:</strong>{" "}
              {question.example.output}
            </p>

            <p className="mt-2">
              <strong>Explanation:</strong>{" "}
              {question.example.explanation}
            </p>

          </div>
        </div>

        <div className="mt-10">

          <h2 className="mb-3 text-xl font-semibold">
            Constraints
          </h2>

          <ul className="list-disc space-y-2 pl-6">
            {question.constraints.map((item) => (
              <li key={item}>
                {item}
              </li>
            ))}
          </ul>

        </div>

        <div className="mt-10">

          <h2 className="mb-3 text-xl font-semibold">
            Hints
          </h2>

          <ul className="list-disc space-y-2 pl-6">
            {question.hints.map((item) => (
              <li key={item}>
                {item}
              </li>
            ))}
          </ul>

        </div>

        <Link
          to={`/dashboard/coding-practice/${question.slug}`}
          className="mt-10 inline-flex rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
        >
          Let's Solve →
        </Link>

      </div>
    </div>
  );
}

export default QuestionDetails;