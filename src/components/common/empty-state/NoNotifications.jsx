import { FiBell } from "react-icons/fi";
import EmptyState from "./EmptyState";

const NoNotifications = ({
  title = "No Notifications",
  description = "You're all caught up. New notifications will appear here.",
  buttonText,
  onButtonClick,
  className = "",
}) => {
  return (
    <EmptyState
      icon={FiBell}
      title={title}
      description={description}
      buttonText={buttonText}
      onButtonClick={onButtonClick}
      className={className}
    />
  );
};

export default NoNotifications;