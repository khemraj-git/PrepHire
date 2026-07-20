import { FiAlertTriangle } from "react-icons/fi";
import Button from "../Button";
import { ButtonLoader } from "../loading";
import Modal from "./Modal";

const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Confirm Action",
  description = "Are you sure you want to continue?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  confirmVariant = "primary",
  loading = false,
}) => {
  const footer = (
    <div className="flex justify-end gap-3">
      <Button
        variant="secondary"
        onClick={onClose}
        disabled={loading}
      >
        {cancelText}
      </Button>

      <Button
        variant={confirmVariant}
        onClick={onConfirm}
        disabled={loading}
      >
        {loading ? (
          <ButtonLoader text="Processing..." />
        ) : (
          confirmText
        )}
      </Button>
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      size="sm"
      footer={footer}
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
          <FiAlertTriangle className="text-3xl text-red-500" />
        </div>

        <p className="leading-7 text-slate-600">
          {description}
        </p>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;