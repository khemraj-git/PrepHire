import { FiArrowLeft, FiRotateCcw } from "react-icons/fi";
import { Link } from "react-router-dom";

import ScoreCard from "./ScoreCard";

const strengths = [
  "Strong communication skills",
  "Good React fundamentals",
  "Structured problem-solving approach",
];

const improvements = [
  "Explain concepts with more confidence",
  "Improve SQL optimization knowledge",
  "Practice system design questions",
];

const suggestions = [
  "Practice 3 React interviews this week.",
  "Solve 10 SQL questions.",
  "Attempt one Full Stack mock interview.",
];

const FeedbackCard = () => {
  return (
    <div className="space-y-8">

      {/* Header */}

      <section className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-lg">

        <h1 className="text-4xl font-bold">
          Interview Feedback
        </h1>

        <p className="mt-3 text-blue-100">
          Great effort! Here's your overall performance analysis.
        </p>

      </section>

      {/* Overall */}

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <ScoreCard
          title="Overall Score"
          score="88%"
          subtitle="Excellent Performance"
          color="blue"
        />

        <ScoreCard
          title="Communication"
          score="91%"
          subtitle="Clear & Confident"
          color="green"
        />

        <ScoreCard
          title="Technical"
          score="84%"
          subtitle="Strong Fundamentals"
          color="purple"
        />

        <ScoreCard
          title="Problem Solving"
          score="87%"
          subtitle="Logical Thinking"
          color="orange"
        />

      </section>

      {/* Analysis */}

      <section className="grid gap-6 lg:grid-cols-2">

        <div className="rounded-3xl border bg-white p-6 shadow-sm">

          <h2 className="text-xl font-bold">
            Strengths
          </h2>

          <ul className="mt-5 space-y-3">

            {strengths.map((item) => (
              <li key={item} className="rounded-xl bg-green-50 p-4">
                ✅ {item}
              </li>
            ))}

          </ul>

        </div>

        <div className="rounded-3xl border bg-white p-6 shadow-sm">

          <h2 className="text-xl font-bold">
            Areas for Improvement
          </h2>

          <ul className="mt-5 space-y-3">

            {improvements.map((item) => (
              <li key={item} className="rounded-xl bg-orange-50 p-4">
                ⚠ {item}
              </li>
            ))}

          </ul>

        </div>

      </section>

      {/* AI Suggestions */}

      <section className="rounded-3xl border bg-white p-8 shadow-sm">

        <h2 className="text-2xl font-bold">
          AI Recommendations
        </h2>

        <div className="mt-6 space-y-4">

          {suggestions.map((item) => (
            <div
              key={item}
              className="rounded-xl bg-blue-50 p-4"
            >
              🤖 {item}
            </div>
          ))}

        </div>

      </section>

      {/* Actions */}

      <section className="flex flex-wrap justify-end gap-4">

        <Link
          to="/dashboard/mock-interview"
          className="flex items-center gap-2 rounded-xl border px-6 py-3 font-semibold"
        >
          <FiArrowLeft />
          Dashboard
        </Link>

        <Link
          to="/dashboard/mock-interview/setup"
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white"
        >
          <FiRotateCcw />
          Retry Interview
        </Link>

      </section>

    </div>
  );
};

export default FeedbackCard;