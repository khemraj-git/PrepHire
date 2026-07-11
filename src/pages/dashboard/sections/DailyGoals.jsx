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
    <Card className="p-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            🎯 Daily Goals
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Stay consistent by completing today's interview tasks.
          </p>
        </div>

        <button
          disabled={!canCustomizeGoals}
          className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition ${
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
        <div className="mb-2 flex items-center justify-between">
          <span className="font-semibold text-slate-800">
            {percentage}% Completed
          </span>

          <span className="text-sm text-slate-500">
            {completedGoals} of {dailyGoals.length} tasks completed
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-700"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <p className="mt-3 text-sm text-slate-600">
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