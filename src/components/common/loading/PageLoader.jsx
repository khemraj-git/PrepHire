import { motion } from "framer-motion";
import { ImSpinner8 } from "react-icons/im";

const PageLoader = ({
  title = "Loading...",
  description = "Please wait while we prepare your content.",
}) => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
        className="mb-6"
      >
        <ImSpinner8
          size={48}
          className="text-indigo-600"
        />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-2xl font-semibold text-slate-900"
      >
        {title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          delay: 0.1,
        }}
        className="mt-2 max-w-md text-sm leading-6 text-slate-500"
      >
        {description}
      </motion.p>
    </div>
  );
};

export default PageLoader;