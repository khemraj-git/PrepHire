import { FiCheckCircle } from "react-icons/fi";
import InterviewTimer from "./InterviewTimer";



const ProgressSidebar = ({
  answers,
  currentQuestion,
 answeredCount,
  progress,
  goToQuestion,
  duration,
}) => {

  return (
    <aside className="space-y-6">

      {/* Progress Card */}

{/* Progress Card */}

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

        <div className="flex items-center justify-between">

            <h2 className="text-lg font-bold">
            Progress
            </h2>

            <span className="text-sm font-semibold text-blue-600">
            {progress}%
            </span>

        </div>

        <div className="mt-5 h-3 overflow-hidden rounded-full bg-gray-100">

            <div
            className="h-full rounded-full bg-blue-600 transition-all duration-300"
            style={{
                width: `${progress}%`,
            }}
            />

        </div>

        <div className="mt-5 flex items-center gap-2 text-gray-600">

            <FiCheckCircle className="text-green-600" />

            <span>
            {answeredCount} of {answers.length} answered
            </span>

        </div>

        </div>
            

      {/* Timer */}
      <InterviewTimer duration={duration} />

      

      {/* Navigator */}

      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

        <h2 className="text-lg font-bold">
          Question Navigator
        </h2>

        <div className="mt-6 grid grid-cols-4 gap-3">

          {answers.map((question, index) => {

            const answered =
              question.answer.trim() !== "";

            return (
              <button
                key={question.id}
                onClick={() => goToQuestion(index)}
                className={`rounded-xl p-3 font-semibold transition-all duration-200 ${
                  currentQuestion === index
                    ? "bg-blue-600 text-white"
                    : answered
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            );

          })}

        </div>

      </div>

      {/* Legend */}

      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

        <h2 className="font-bold">
          Legend
        </h2>

        <div className="mt-5 space-y-3 text-sm">

          <div className="flex items-center gap-3">

            <div className="h-4 w-4 rounded bg-blue-600" />

            Current Question

          </div>

          <div className="flex items-center gap-3">

            <div className="h-4 w-4 rounded bg-green-500" />

            Answered

          </div>

          <div className="flex items-center gap-3">

            <div className="h-4 w-4 rounded bg-gray-300" />

            Not Answered

          </div>

        </div>

      </div>

    </aside>
  );
};

export default ProgressSidebar;