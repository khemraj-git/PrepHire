import Card from "../../../components/common/Card";
import { FiCheckCircle, FiAlertCircle } from "react-icons/fi";

const SkillsCard = ({
  title,
  skills,
  variant,
}) => {
  const isSuccess = variant === "success";

  return (
    <Card className="p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-6 flex items-center gap-3">
        <div
          className={`rounded-xl p-3 ${
            isSuccess
              ? "bg-green-100"
              : "bg-yellow-100"
          }`}
        >
          {isSuccess ? (
            <FiCheckCircle className="text-xl text-green-600" />
          ) : (
            <FiAlertCircle className="text-xl text-yellow-600" />
          )}
        </div>

        <h3 className="text-xl font-semibold text-slate-900">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
              isSuccess
                ? "bg-green-100 text-green-700 hover:bg-green-200"
                : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </Card>
  );
};

export default SkillsCard;