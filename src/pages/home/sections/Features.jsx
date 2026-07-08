import {
  FaLaptopCode,
  FaBrain,
  FaFileAlt,
  FaChartLine,
} from "react-icons/fa";

import Container from "../../../components/common/Container";

const features = [
  {
    icon: <FaLaptopCode size={28} />,
    title: "Coding Practice",
    description:
      "Solve company-specific coding questions with an integrated code editor.",
  },
  {
    icon: <FaBrain size={28} />,
    title: "AI Mock Interviews",
    description:
      "Practice technical and HR interviews with instant AI feedback.",
  },
  {
    icon: <FaFileAlt size={28} />,
    title: "Resume Review",
    description:
      "Analyze your resume and receive actionable improvement suggestions.",
  },
  {
    icon: <FaChartLine size={28} />,
    title: "Performance Analytics",
    description:
      "Track your progress with detailed reports and interview insights.",
  },
];

function Features() {
  return (
    <section 
    id="features"
    className="py-24 bg-slate-50">
      <Container>
        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Features
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Everything you need to crack interviews
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600">
            One platform to practice coding, improve communication,
            prepare resumes and monitor your interview performance.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl border border-slate-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-100 text-blue-600">
                  {feature.icon}
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-slate-600 leading-7">
                  {feature.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </Container>
    </section>
  );
}

export default Features;