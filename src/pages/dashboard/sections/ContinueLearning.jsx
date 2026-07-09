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
        <h2 className="text-xl font-semibold text-slate-900">
          Continue Learning
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Pick up where you left off and continue preparing.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {learningItems.map((item) => {
          const Icon = item.icon;

          return (
            <Card
              key={item.title}
              className="p-6 transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <Icon size={22} />
              </div>

              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {item.description}
              </p>

              <button
                className="mt-6 inline-flex items-center gap-2 font-medium text-blue-600 transition hover:text-blue-700"
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