import { FiFileText } from "react-icons/fi";
import EmptyState from "./EmptyState";

const NoResume = ({
  title = "No Resume Uploaded",
  description = "Upload your resume to receive ATS analysis, AI feedback, and personalized interview recommendations.",
  buttonText = "Upload Resume",
  onButtonClick,
  className = "",
}) => {
  return (
    <EmptyState
      icon={FiFileText}
      title={title}
      description={description}
      buttonText={buttonText}
      onButtonClick={onButtonClick}
      className={className}
    />
  );
};

export default NoResume;