import { FiFileText } from "react-icons/fi";

const ResumeHeader = () => {
  return (
    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
      <div>
        <div className="mb-4 flex items-center gap-4">
          <div className="rounded-2xl bg-blue-100 p-4">
            <FiFileText className="text-3xl text-blue-600" />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              Resume Review
            </h1>

            <p className="mt-2 text-slate-500">
              Analyze your resume, improve ATS compatibility, discover missing
              skills, and prepare for interviews.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeHeader;