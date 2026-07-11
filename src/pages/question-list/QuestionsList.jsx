import { Link, useParams } from "react-router-dom";
import { allQuestions } from "../../data/questionBank";

import QuestionListItem from "../components/questions/QuestionListItem";

function QuestionsList() {
  const { category } = useParams();

  const questions = allQuestions.filter(
    (question) =>
      question.category.toLowerCase().replace(/\s+/g, "-") === category
  );

  const pageTitle = category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="space-y-8 p-6">
      <div>
        <Link
          to="/dashboard/question-bank"
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          ← Back to Question Bank
        </Link>

        <h1 className="mt-4 text-3xl font-bold text-slate-900">
          {pageTitle} Interview Questions
        </h1>

        <p className="mt-2 text-slate-500">
          Browse all {pageTitle} interview questions.
        </p>
      </div>

      <div className="space-y-5">
        {questions.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
            No questions available.
          </div>
        ) : (
          questions.map((question) => (
            <QuestionListItem
              key={question.id}
              question={question}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default QuestionsList;