import { motion } from "framer-motion";
import Button from "../Button";

const EmptyState = ({
  icon: Icon,
  title,
  description,
  buttonText,
  onButtonClick,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-8 py-16 text-center shadow-sm ${className}`}
    >
      {Icon && (
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-50">
          <Icon className="text-4xl text-indigo-600" />
        </div>
      )}

      <h2 className="text-2xl font-semibold text-slate-900">
        {title}
      </h2>

      <p className="mt-3 max-w-md text-slate-500">
        {description}
      </p>

        {buttonText && (
        <div className="mt-8">
            <Button onClick={onButtonClick}>
            {buttonText}
            </Button>
        </div>
        )}
    </motion.div>
  );
};

export default EmptyState;