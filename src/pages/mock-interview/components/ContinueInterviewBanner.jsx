import { FiArrowRight, FiPlayCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const ContinueInterviewBanner = () => {
  return (
    <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-8 text-white shadow-lg">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full bg-white/15 px-4 py-1 text-sm font-medium backdrop-blur-sm">
            Continue Your Journey
          </span>

          <h2 className="mt-4 text-3xl font-bold">
            Ready for Your Next Mock Interview?
          </h2>

          <p className="mt-4 text-lg leading-7 text-blue-100">
            Practice real interview scenarios designed by industry experts.
            Improve communication, technical thinking, and confidence before
            your actual placement interviews.
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
              Browse Interviews
              <FiArrowRight />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
            <p className="text-sm text-blue-100">
              Practice Today
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              3
            </h3>
          </div>

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
            <p className="text-sm text-blue-100">
              Next Goal
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              25
            </h3>
          </div>

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
            <p className="text-sm text-blue-100">
              Current Rank
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              #248
            </h3>
          </div>

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
            <p className="text-sm text-blue-100">
              Confidence
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              High
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContinueInterviewBanner;