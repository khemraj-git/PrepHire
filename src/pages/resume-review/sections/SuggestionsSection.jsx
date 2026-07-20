import SuggestionsCard from "../components/SuggestionsCard";
import ActionButtons from "../components/ActionButtons";

const SuggestionsSection = () => {
  return (
    <section className="space-y-6">
      <SuggestionsCard />
      <ActionButtons />
    </section>
  );
};

export default SuggestionsSection;