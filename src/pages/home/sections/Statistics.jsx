import Container from "../../../components/common/Container";

const stats = [
  {
    number: "10K+",
    label: "Interview Questions",
  },
  {
    number: "5000+",
    label: "Students Practicing",
  },
  {
    number: "50+",
    label: "Top Companies",
  },
  {
    number: "95%",
    label: "Success Rate",
  },
];

function Statistics() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-4xl font-bold text-blue-600">
                {stat.number}
              </h2>

              <p className="mt-3 text-slate-600 font-medium">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </Container>
    </section>
  );
}

export default Statistics;