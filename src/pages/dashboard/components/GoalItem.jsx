import {
  FiCheckCircle,
  FiCircle,
  FiClock,
} from "react-icons/fi";

function GoalItem({ goal }) {
  const difficultyStyles = {
    Easy: {
      bg: "bg-green-100",
      text: "text-green-700",
    },
    Medium: {
      bg: "bg-amber-100",
      text: "text-amber-700",
    },
    Hard: {
      bg: "bg-red-100",
      text: "text-red-700",
    },
  };

  const style = difficultyStyles[goal.difficulty];

  return (
    <div
      className={`group flex items-center justify-between rounded-xl border px-5 py-4 transition-all duration-200
      ${
        goal.completed
          ? "border-green-200 bg-green-50"
          : "border-slate-200 bg-white hover:border-blue-200 hover:shadow-sm"
      }`}
    >
      {/* Left */}
      <div className="flex items-center gap-4">
        {goal.completed ? (
          <FiCheckCircle
            size={22}
            className="text-green-500"
          />
        ) : (
          <FiCircle
            size={22}
            className="text-slate-400 transition group-hover:text-blue-500"
          />
        )}

        <div>
          <h3
            className={`font-semibold transition ${
              goal.completed
                ? "text-slate-400 line-through"
                : "text-slate-800"
            }`}
          >
            {goal.title}
          </h3>

            <p className="mt-1 text-xs text-slate-500">
            Interview Preparation Task
            </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <span
          className={`${style.bg} ${style.text} rounded-full px-3 py-1 text-xs font-semibold`}
        >
          {goal.difficulty}
        </span>

        <div className="flex items-center gap-1 text-xs text-slate-500">
          <FiClock size={13} />
          {goal.duration}
        </div>
      </div>
    </div>
  );
}

export default GoalItem;