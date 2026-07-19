import { FiAlertTriangle, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const FinishInterviewModal = ({
  isOpen,
  answeredCount,
  totalQuestions,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-3xl bg-white shadow-2xl">

        <div className="flex items-center justify-between border-b border-gray-100 p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-orange-100 p-3">
              <FiAlertTriangle className="text-xl text-orange-600" />
            </div>

            <div>
              <h2 className="text-xl font-bold">
                Finish Interview?
              </h2>

              <p className="text-sm text-gray-500">
                Review your progress before submitting.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-gray-100"
          >
            <FiX />
          </button>
        </div>

        <div className="space-y-6 p-6">

          <div className="rounded-2xl bg-blue-50 p-5">
            <div className="flex items-center justify-between">

              <span className="text-gray-600">
                Questions Answered
              </span>

              <span className="font-bold text-blue-700">
                {answeredCount} / {totalQuestions}
              </span>

            </div>
          </div>

          {answeredCount !== totalQuestions && (
            <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-5">
              <p className="text-sm text-yellow-700">
                Some questions are still unanswered.
                You can go back and complete them before submitting.
              </p>
            </div>
          )}

          <div className="flex justify-end gap-3">

            <button
              onClick={onClose}
              className="rounded-xl border border-gray-200 px-5 py-3 font-semibold hover:bg-gray-50"
            >
              Continue Interview
            </button>

            <Link
              to="/dashboard/mock-interview/feedback"
              className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Submit Interview
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
};

export default FinishInterviewModal;