
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

import useMockInterview from "../../../hooks/useMockInterview";
import ProgressSidebar from "./ProgressSidebar";
import { useState } from "react";
import FinishInterviewModal from "./FinishInterviewModal";
import { useLocation } from "react-router-dom";
import InterviewTimer from "./InterviewTimer";


const QuestionPanel = () => {
 const {
  answers,
  question,
  currentQuestion,

  answeredCount,
  progress,

  updateAnswer,
  nextQuestion,
  previousQuestion,
  goToQuestion,
} = useMockInterview();

const [showFinishModal, setShowFinishModal] = useState(false);
const { state } = useLocation();

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

            <div className="mt-4 flex flex-wrap gap-2">

              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                💼 {state?.role}
              </span>

              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                📈 {state?.difficulty}
              </span>

              <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
                💻 {state?.language}
              </span>

              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                ❓ {state?.questions} Questions
              </span>

            </div>
          </div>

        

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
              onClick={previousQuestion}
              className="flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-3 font-semibold transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <FiArrowLeft />
              Previous
            </button>

            {currentQuestion === answers.length - 1 ? (
            <button
              onClick={() => setShowFinishModal(true)}
              className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
            >
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
            answeredCount={answeredCount}
            progress={progress}
            goToQuestion={goToQuestion}
            duration={state?.duration}
          />

        <FinishInterviewModal
          isOpen={showFinishModal}
          answeredCount={answeredCount}
          totalQuestions={answers.length}
          onClose={() => setShowFinishModal(false)}
        />

    </div>
  );
};

export default QuestionPanel;