import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";

const sizeClasses = {
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
  full: "max-w-6xl",
};

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = "md",
  showHeader = true,
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEsc = true,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape" && closeOnEsc) {
        onClose?.();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeOnEsc, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            if (closeOnOverlayClick) {
              onClose?.();
            }
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
            className={`w-full ${sizeClasses[size]} overflow-hidden rounded-2xl bg-white shadow-2xl`}
          >
            {showHeader && (
              <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
                <h2 className="text-xl font-semibold text-slate-900">
                  {title}
                </h2>

                {showCloseButton && (
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-lg p-2 transition-colors hover:bg-slate-100"
                  >
                    <FiX
                      size={20}
                      className="text-slate-600"
                    />
                  </button>
                )}
              </div>
            )}

            <div className="max-h-[70vh] overflow-y-auto p-6">
              {children}
            </div>

            {footer && (
              <div className="border-t border-slate-200 px-6 py-4">
                {footer}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;