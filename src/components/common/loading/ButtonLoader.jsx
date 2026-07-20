import { ImSpinner8 } from "react-icons/im";

const ButtonLoader = ({
  text = "Loading...",
  size = 16,
  className = "",
}) => {
  return (
    <span
      className={`inline-flex items-center justify-center gap-2 ${className}`}
    >
      <ImSpinner8
        size={size}
        className="animate-spin"
      />

      <span>{text}</span>
    </span>
  );
};

export default ButtonLoader;