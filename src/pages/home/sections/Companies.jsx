import Container from "../../../components/common/Container";
import companyLogos from "../../../constants/companyLogos";

function Companies() {
  return (
    <section 
    id="companies"
    className="py-20 bg-white">
      <Container>
        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Trusted by Students
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Prepare for interviews at top companies
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600">
            Practice company-specific interview questions and coding rounds
            designed around real hiring processes.
          </p>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

            {companyLogos.map((company) => (
              <div
                key={company}
                className="rounded-xl border border-slate-200 bg-slate-50 py-6 text-lg font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-white hover:shadow-lg"
              >
                {company}
              </div>
            ))}

          </div>

        </div>
      </Container>
    </section>
  );
}

export default Companies;