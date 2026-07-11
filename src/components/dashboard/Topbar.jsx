import { FiBell, FiSearch } from "react-icons/fi";
import { useLocation } from "react-router-dom";

const pageDetails = {
  "/dashboard": {
    title: "Welcome Back 👋",
    description: "Continue preparing for your dream job.",
  },
  "/dashboard/question-bank": {
    title: "Question Bank",
    description:
      "Browse and practice curated interview questions.",
  },
  "/dashboard/coding": {
    title: "Coding Practice",
    description:
      "Solve coding problems and improve your problem-solving skills.",
  },
  "/dashboard/mock-interview": {
    title: "Mock Interview",
    description:
      "Practice realistic interview scenarios with confidence.",
  },
  "/dashboard/resume": {
    title: "Resume Review",
    description:
      "Improve your resume with actionable suggestions.",
  },
  "/dashboard/analytics": {
    title: "Analytics",
    description:
      "Track your learning progress and performance.",
  },
  "/dashboard/profile": {
    title: "Profile",
    description:
      "Manage your account and personal information.",
  },
};

function Topbar() {
  const { pathname } = useLocation();

  const currentPage =
    pageDetails[pathname] || pageDetails["/dashboard"];

  return (
    <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          {currentPage.title}
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          {currentPage.description}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <FiSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-72 rounded-xl border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 outline-none transition focus:border-blue-500 focus:bg-white"
          />
        </div>

        <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white transition hover:bg-slate-100">
          <FiBell size={20} />
        </button>

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
          K
        </div>
      </div>
    </header>
  );
}

export default Topbar;