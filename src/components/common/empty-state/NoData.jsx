import { FiInbox } from "react-icons/fi";
import EmptyState from "./EmptyState";

const NoData = ({
  title = "No Data Available",
  description = "There is nothing to display at the moment. Please check back later.",
  buttonText,
  onButtonClick,
  className = "",
}) => {
  return (
    <EmptyState
      icon={FiInbox}
      title={title}
      description={description}
      buttonText={buttonText}
      onButtonClick={onButtonClick}
      className={className}
    />
  );
};

export default NoData;