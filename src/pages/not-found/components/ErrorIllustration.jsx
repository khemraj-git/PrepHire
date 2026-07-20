import { motion } from "framer-motion";
import { FiAlertTriangle } from "react-icons/fi";

const ErrorIllustration = () => {
  return (
    <motion.div
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="relative flex items-center justify-center"
    >
      <div className="absolute h-44 w-44 rounded-full bg-indigo-100 blur-3xl opacity-70" />

      <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-indigo-100 bg-white shadow-xl">
        <FiAlertTriangle className="text-6xl text-indigo-600" />
      </div>
    </motion.div>
  );
};

export default ErrorIllustration;