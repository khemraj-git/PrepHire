import { motion } from "framer-motion";
import { ImSpinner8 } from "react-icons/im";

const FullScreenLoader = ({
  title = "PrepHire",
  description = "Preparing your interview experience...",
}) => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center text-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-600 shadow-lg"
        >
          <span className="text-3xl font-bold text-white">P</span>
        </motion.div>

        {/* Spinner */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
          className="mb-5"
        >
          <ImSpinner8
            size={30}
            className="text-indigo-600"
          />
        </motion.div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-slate-900">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FullScreenLoader;