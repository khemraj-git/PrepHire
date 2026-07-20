import { motion } from "framer-motion";
import Container from "../../components/common/Container";
import ErrorIllustration from "./components/ErrorIllustration";
import ActionButtons from "./components/ActionButtons";

const NotFound = () => {
  return (
    <Container>
      <section className="flex min-h-[80vh] flex-col items-center justify-center text-center">
        <ErrorIllustration />

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-10 text-7xl font-bold text-slate-900"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-3xl font-semibold text-slate-800"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-5 max-w-xl text-slate-500"
        >
          Sorry, the page you're looking for doesn't exist, may have been
          moved, or the URL is incorrect.
        </motion.p>

        <ActionButtons />
      </section>
    </Container>
  );
};

export default NotFound;