import CompanyChip from "../components/CompanyChip";
import { popularCompanies } from "../../../data/questionBank";

function PopularCompanies() {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Popular Companies
        </h2>

        <p className="mt-2 text-slate-500">
          Browse interview questions asked by top companies.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {popularCompanies.map((company) => (
          <CompanyChip
            key={company}
            company={company}
            clickable
          />
        ))}
      </div>
    </section>
  );
}

export default PopularCompanies;