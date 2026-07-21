import { FiArrowRight, FiCode, FiFileText, FiMessageSquare } from "react-icons/fi";
import Card from "../../../components/common/Card";

const learningItems = [
  {
    title: "Coding Practice",
    description: "Solve DSA and programming questions.",
    icon: FiCode,
    button: "Start Practice",
  },
  {
    title: "Mock Interview",
    description: "Practice technical and HR interviews.",
    icon: FiMessageSquare,
    button: "Begin Mock",
  },
  {
    title: "Resume Review",
    description: "Improve your resume with feedback.",
    icon: FiFileText,
    button: "Review Resume",
  },
];

function ContinueLearning() {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
          Continue Learning
        </h2>

        <p className="mt-1 text-xs text-slate-500 sm:text-sm">
          Pick up where you left off and continue preparing.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {learningItems.map((item) => {
          const Icon = item.icon;

          return (
            <Card
              key={item.title}
              className="p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 sm:mb-5 sm:h-12 sm:w-12">
                <Icon size={20} />
              </div>

              <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                {item.title}
              </h3>

              <p className="mt-2 text-xs text-slate-500 sm:text-sm">
                {item.description}
              </p>

              <button
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition hover:text-blue-700 sm:mt-6 sm:text-base"
              >
                {item.button}
                <FiArrowRight />
              </button>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export default ContinueLearning;