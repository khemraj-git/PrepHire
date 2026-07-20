import {
  FiAlertCircle,
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiMic,
  FiMonitor,
  FiVideo,
} from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";

const instructions = [
  "Ensure you are in a quiet environment.",
  "Read each question carefully before answering.",
  "You can move between questions during the interview.",
  "Your interview time starts after clicking Start Interview.",
  "Answer confidently and think aloud whenever appropriate.",
  "Feedback will be generated after completing the interview.",
];

const checks = [
  {
    icon: FiMonitor,
    title: "Stable Internet",
    status: "Ready",
  },
  {
    icon: FiMic,
    title: "Microphone",
    status: "Enabled",
  },
  {
    icon: FiVideo,
    title: "Camera",
    status: "Optional",
  },
  {
    icon: FiClock,
    title: "Timer",
    status: "30 Minutes",
  },
];

const InstructionsCard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const interviewConfig = location.state;
  return (
    <div className="mx-auto max-w-5xl space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Interview Instructions
        </h1>

        <p className="mt-2 text-gray-500">
          Please read the following instructions carefully before beginning your
          mock interview.
        </p>
      </div>

      {/* System Check */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {checks.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-blue-100 p-3">
                  <Icon className="text-xl text-blue-600" />
                </div>

                <FiCheckCircle className="text-green-600" />
              </div>

              <h3 className="mt-4 font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {item.status}
              </p>
            </div>
          );
        })}
      </div>

      {/* Instructions */}
      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="flex items-center gap-3">
          <FiAlertCircle className="text-2xl text-blue-600" />

          <h2 className="text-2xl font-bold">
            Interview Guidelines
          </h2>
        </div>

        <div className="mt-8 space-y-4">
          {instructions.map((instruction, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-2xl bg-gray-50 p-4"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
                {index + 1}
              </div>

              <p className="text-gray-700">
                {instruction}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-end">
        <button
          onClick={() =>
            navigate("/dashboard/mock-interview/session", {
              state: interviewConfig,
            })
          }
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Start Interview
          <FiArrowRight />
        </button>
        </div>
      </div>
    </div>
  );
};

export default InstructionsCard;