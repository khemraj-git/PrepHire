import toast from "react-hot-toast";

export const showSuccessToast = (
  message = "Operation completed successfully."
) => {
  toast.success(message);
};

export const showErrorToast = (
  message = "Something went wrong."
) => {
  toast.error(message);
};

export const showInfoToast = (
  message = "Here's some information."
) => {
  toast(message);
};

export const showLoadingToast = (
  message = "Please wait..."
) => {
  return toast.loading(message);
};

export const dismissToast = (toastId) => {
  toast.dismiss(toastId);
};