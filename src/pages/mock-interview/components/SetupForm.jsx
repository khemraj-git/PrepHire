import { useState } from "react";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "React Developer",
  "Java Developer",
  "Python Developer",
  "Data Analyst",
];

const difficulties = ["Easy", "Intermediate", "Hard"];

const durations = ["15 Minutes", "30 Minutes", "45 Minutes", "60 Minutes"];

const questionCounts = [5, 10, 15, 20];

const languages = ["Java", "C++", "Python", "JavaScript"];

const SetupForm = () => {
  const [formData, setFormData] = useState({
    role: roles[0],
    difficulty: difficulties[1],
    duration: durations[1],
    questions: questionCounts[1],
    language: languages[0],
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Interview Setup
        </h1>

        <p className="mt-2 text-gray-500">
          Configure your interview preferences before starting your mock
          interview session.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        {/* Left */}
        <div className="space-y-6 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

          {/* Role */}
          <div>
            <label className="mb-2 block font-semibold text-gray-800">
              Target Role
            </label>

            <select
              value={formData.role}
              onChange={(e) => handleChange("role", e.target.value)}
              className="w-full rounded-xl border border-gray-200 p-3 outline-none focus:border-blue-500"
            >
              {roles.map((role) => (
                <option key={role}>{role}</option>
              ))}
            </select>
          </div>

          {/* Difficulty */}
          <div>
            <label className="mb-3 block font-semibold text-gray-800">
              Difficulty
            </label>

            <div className="grid grid-cols-3 gap-3">
              {difficulties.map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => handleChange("difficulty", level)}
                  className={`rounded-xl border p-3 transition ${
                    formData.difficulty === level
                      ? "border-blue-600 bg-blue-50 text-blue-700"
                      : "border-gray-200 hover:border-blue-300"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Duration */}
          <div>
            <label className="mb-2 block font-semibold text-gray-800">
              Interview Duration
            </label>

            <select
              value={formData.duration}
              onChange={(e) => handleChange("duration", e.target.value)}
              className="w-full rounded-xl border border-gray-200 p-3 outline-none focus:border-blue-500"
            >
              {durations.map((duration) => (
                <option key={duration}>{duration}</option>
              ))}
            </select>
          </div>

          {/* Questions */}
          <div>
            <label className="mb-2 block font-semibold text-gray-800">
              Number of Questions
            </label>

            <select
              value={formData.questions}
              onChange={(e) => handleChange("questions", Number(e.target.value))}
              className="w-full rounded-xl border border-gray-200 p-3 outline-none focus:border-blue-500"
            >
              {questionCounts.map((count) => (
                <option key={count}>{count}</option>
              ))}
            </select>
          </div>

          {/* Language */}
          <div>
            <label className="mb-2 block font-semibold text-gray-800">
              Preferred Programming Language
            </label>

            <select
              value={formData.language}
              onChange={(e) => handleChange("language", e.target.value)}
              className="w-full rounded-xl border border-gray-200 p-3 outline-none focus:border-blue-500"
            >
              {languages.map((language) => (
                <option key={language}>{language}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Right */}
        <div className="space-y-6">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">
              Interview Summary
            </h2>

            <div className="mt-6 space-y-4 text-sm">
              <SummaryItem title="Role" value={formData.role} />
              <SummaryItem title="Difficulty" value={formData.difficulty} />
              <SummaryItem title="Duration" value={formData.duration} />
              <SummaryItem
                title="Questions"
                value={`${formData.questions} Questions`}
              />
              <SummaryItem title="Language" value={formData.language} />
            </div>

            <Link
              to="/dashboard/mock-interview/instructions"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Start Interview

              <FiArrowRight />
            </Link>
          </div>

          <div className="rounded-3xl border border-green-200 bg-green-50 p-6">
            <div className="flex items-center gap-3">
              <FiCheckCircle className="text-xl text-green-600" />

              <h3 className="font-semibold text-green-800">
                Before You Begin
              </h3>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-green-700">
              <li>• Find a quiet environment.</li>
              <li>• Answer confidently.</li>
              <li>• Think aloud while solving.</li>
              <li>• Manage your interview time wisely.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const SummaryItem = ({ title, value }) => (
  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
    <span className="text-gray-500">{title}</span>
    <span className="font-semibold text-gray-900">{value}</span>
  </div>
);

export default SetupForm;