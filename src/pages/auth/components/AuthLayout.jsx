import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Panel */}
        <div className="hidden lg:flex flex-col justify-between bg-blue-600 text-white p-12">
          <div>
            <Link
              to="/"
              className="text-3xl font-bold tracking-tight"
            >
              PrepHire
            </Link>

            <div className="mt-20 max-w-md">
              <h1 className="text-5xl font-bold leading-tight">
                Crack Interviews with Confidence.
              </h1>

              <p className="mt-6 text-blue-100 text-lg leading-8">
                Practice coding questions, prepare for HR interviews,
                improve your resume, and track your progress—all in one
                place.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              "500+ Interview Questions",
              "Real Coding Challenges",
              "AI Resume Feedback",
              "Performance Analytics",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <FaArrowRight className="text-sm" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md rounded-2xl bg-white shadow-lg border border-slate-200 p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900">
                {title}
              </h2>

              <p className="mt-2 text-slate-500">
                {subtitle}
              </p>
            </div>

            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;