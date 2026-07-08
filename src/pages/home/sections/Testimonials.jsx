import Container from "../../../components/common/Container";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer @ Google",
    feedback:
      "PrepHire completely changed the way I prepared for technical interviews. The AI mock interviews gave me the confidence to crack Google's interview process.",
  },
  {
    name: "Priya Verma",
    role: "SDE Intern @ Microsoft",
    feedback:
      "The coding practice and company-specific questions were incredibly helpful. Everything I needed was available in one place.",
  },
  {
    name: "Aman Patel",
    role: "Backend Developer @ Amazon",
    feedback:
      "The resume review and analytics helped me identify my weak areas. I improved significantly within a few weeks.",
  },
];

function Testimonials() {
  return (
    <section 
    id="testimonials"
    className="py-24 bg-slate-50">
      <Container>
        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Loved by students preparing for interviews
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600">
            Thousands of students use PrepHire to improve their interview
            skills and land offers at top companies.
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">

            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-2xl border border-slate-200 p-8 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="flex gap-1 text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <p className="mt-6 text-slate-600 leading-7">
                  "{testimonial.feedback}"
                </p>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {testimonial.name}
                  </h3>

                  <p className="text-slate-500">
                    {testimonial.role}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>
      </Container>
    </section>
  );
}

export default Testimonials;