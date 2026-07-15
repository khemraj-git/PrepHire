import {
  FiArrowRight,
  FiClock,
  FiLayers,
  FiPlay,
} from "react-icons/fi";
import { Link } from "react-router-dom";


const difficultyStyles = {
  Easy: "bg-emerald-100 text-emerald-700",
  Intermediate: "bg-blue-100 text-blue-700",
  Hard: "bg-red-100 text-red-700",
  Advanced: "bg-purple-100 text-purple-700",
};

const InterviewCard = ({ interview, recommended = false }) => {
  return (
    <div className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
      {/* Top */}
      <div className="flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
          {interview.icon}
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            difficultyStyles[interview.difficulty]
          }`}
        >
          {interview.difficulty}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-5 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
        {interview.title}
      </h3>

      {/* Description */}
      <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
        {interview.description}
      </p>

      {/* Info */}
      <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
        <span className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1">
          <FiClock />
          {interview.duration}
        </span>

        <span className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1">
          <FiLayers />
          {interview.questions} Questions
        </span>
      </div>

      {/* Progress (only for categories) */}
      {!recommended && (
        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-gray-500">
              Progress
            </span>

            <span className="font-medium text-blue-600">
              {interview.completed}
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-blue-600"
              style={{
                width: `${Math.min(
                  (interview.completed / interview.questions) * 100,
                  100
                )}%`,
              }}
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-8">
        <Link
            to="/dashboard/mock-interview/setup"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
            <FiPlay size={16} />

            {recommended ? "Start Interview" : "Practice Now"}

            <FiArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default InterviewCard;