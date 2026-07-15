
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

import useMockInterview from "../../../hooks/useMockInterview";
import ProgressSidebar from "./ProgressSidebar";


const QuestionPanel = () => {
  const {
  answers,
  question,
  currentQuestion,

  updateAnswer,
  nextQuestion,
  previousQuestion,
  goToQuestion,
} = useMockInterview();

  return (
    <div className="grid gap-6 lg:grid-cols-[2fr_350px]">

      {/* Left */}
      <section className="rounded-3xl border border-gray-200 bg-white shadow-sm">

        {/* Header */}
        <div className="border-b border-gray-100 p-6">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Question {currentQuestion + 1} of {answers.length}
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                {question.category}
              </h2>
            </div>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              30:00
            </span>

          </div>
        </div>

        {/* Question */}
        <div className="p-8">

          <h3 className="text-xl font-semibold leading-9 text-gray-900">
            {question.question}
          </h3>

          <textarea
            rows={12}
            value={question.answer}
            onChange={(e) =>
              updateAnswer(e.target.value)
            }
            placeholder="Write your answer here..."
            className="mt-8 w-full rounded-2xl border border-gray-200 p-5 outline-none focus:border-blue-500"
          />

          <div className="mt-8 flex justify-between">

            <button
              disabled={currentQuestion === 0}
              onClick={() =>
                onClick={previousQuestion}
              }
              className="flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-3 font-semibold transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <FiArrowLeft />

              Previous
            </button>

            {currentQuestion === answers.length - 1 ? (
              <button className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700">
                Finish Interview
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Next

                <FiArrowRight />
              </button>
            )}

          </div>

        </div>

      </section>

      {/* Right Sidebar */}

        <ProgressSidebar
        answers={answers}
        currentQuestion={currentQuestion}
        goToQuestion={goToQuestion}
        />

    </div>
  );
};

export default QuestionPanel;