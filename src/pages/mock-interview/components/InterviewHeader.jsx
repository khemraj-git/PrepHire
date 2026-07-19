import { FiArrowRight, FiPlayCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const InterviewHeader = () => {
  return (
    <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-8 text-white shadow-lg lg:p-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1 text-sm font-medium backdrop-blur-sm">
            AI Powered Interview Practice
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-tight">
            Ace Your Next <br />
            Technical Interview
          </h1>

          <p className="mt-4 text-lg leading-8 text-blue-100">
            Practice realistic mock interviews, receive detailed feedback,
            improve communication skills, and build confidence before your
            actual interviews.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/dashboard/mock-interview/setup"
              className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:shadow-xl"
            >
              <FiPlayCircle size={20} />
              Start Interview
            </Link>
            <button className="flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 font-semibold transition hover:bg-white/10">
              View History
              <FiArrowRight />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-md">
            <p className="text-sm text-blue-100">
              Practice Interviews
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              150+
            </h3>
          </div>

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-md">
            <p className="text-sm text-blue-100">
              Success Rate
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              92%
            </h3>
          </div>

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-md">
            <p className="text-sm text-blue-100">
              Interview Roles
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              20+
            </h3>
          </div>

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-md">
            <p className="text-sm text-blue-100">
              AI Feedback
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              Instant
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterviewHeader;