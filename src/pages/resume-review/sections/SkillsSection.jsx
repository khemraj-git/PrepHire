import SkillsCard from "../components/SkillsCard";
import {
  skillsFound,
  missingSkills,
} from "../../../data/resumeData";

const SkillsSection = () => {
  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <SkillsCard
        title="Skills Found"
        skills={skillsFound}
        variant="success"
      />

      <SkillsCard
        title="Missing Skills"
        skills={missingSkills}
        variant="warning"
      />
    </section>
  );
};

export default SkillsSection;