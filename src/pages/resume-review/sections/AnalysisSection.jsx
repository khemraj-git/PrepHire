import { analysis } from "../../../data/resumeData";
import AnalysisCard from "../components/AnalysisCard";

const AnalysisSection = () => {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Resume Analysis
        </h2>

        <p className="mt-1 text-slate-500">
          Detailed analysis of your resume sections.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {analysis.map((item) => (
          <AnalysisCard
            key={item.title}
            title={item.title}
            status={item.status}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default AnalysisSection;