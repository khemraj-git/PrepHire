import { FiSettings } from "react-icons/fi";
import Card from "../../../components/common/Card";
import GoalItem from "../components/GoalItem";

import {
  dailyGoals,
  canCustomizeGoals,
} from "../../../data/dashboard";

function DailyGoals() {
  const completedGoals = dailyGoals.filter(
    (goal) => goal.completed
  ).length;

  const percentage = Math.round(
    (completedGoals / dailyGoals.length) * 100
  );

  const getMotivationMessage = () => {
    if (percentage === 100)
      return "🎉 Amazing! You completed all your goals today.";

    if (percentage >= 75)
      return "🔥 You're almost done. Finish strong!";

    if (percentage >= 50)
      return "💪 Great progress! Keep the momentum going.";

    if (percentage >= 25)
      return "🚀 Nice start! Let's complete a few more.";

    return "✨ Let's begin today's interview preparation.";
  };

  return (
    <Card className="p-5 sm:p-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
            🎯 Daily Goals
          </h2>

          <p className="mt-1 text-xs text-slate-500 sm:text-sm">
            Stay consistent by completing today's interview tasks.
          </p>
        </div>

        <button
          disabled={!canCustomizeGoals}
          className={`flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition sm:w-auto ${
            canCustomizeGoals
              ? "border-blue-600 text-blue-600 hover:bg-blue-50"
              : "cursor-not-allowed border-slate-200 text-slate-400"
          }`}
        >
          <FiSettings size={16} />
          Customize
        </button>
      </div>

      {/* Progress */}
      <div className="mt-6">
        <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm font-semibold text-slate-800 sm:text-base">
            {percentage}% Completed
          </span>

          <span className="text-xs text-slate-500 sm:text-sm">
            {completedGoals} of {dailyGoals.length} tasks completed
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-700"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          {getMotivationMessage()}
        </p>
      </div>

      {/* Goals */}
      <div className="mt-6 space-y-4">
        {dailyGoals.map((goal) => (
          <GoalItem key={goal.id} goal={goal} />
        ))}
      </div>
    </Card>
  );
}

export default DailyGoals;