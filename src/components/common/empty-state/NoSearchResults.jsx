import { FiSearch } from "react-icons/fi";
import EmptyState from "./EmptyState";

const NoSearchResults = ({
  title = "No Results Found",
  description = "We couldn't find anything matching your search. Try adjusting your keywords or filters.",
  buttonText = "Clear Filters",
  onButtonClick,
  className = "",
}) => {
  return (
    <EmptyState
      icon={FiSearch}
      title={title}
      description={description}
      buttonText={buttonText}
      onButtonClick={onButtonClick}
      className={className}
    />
  );
};

export default NoSearchResults;