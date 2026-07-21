import Button from "../../../components/common/Button";
import FloatingCard from "../../../components/common/FloatingCard";
import { Link } from "react-router-dom";


function Hero() {
  return (
    <section className="bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">

       <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT SIDE */}

          <div className="text-center lg:text-left">

            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              🚀 Smart Interview Preparation Platform
            </span>

            <h1 className="mt-8 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">

              <span className="text-blue-600">Prepare Smarter.</span>
                <br />
                Interview Better.
                <br />
                Get Hired.

            </h1>

            <p className="mt-8 text-base leading-7 text-slate-600 sm:text-lg lg:text-xl lg:leading-8">

              Master technical interviews, coding assessments, 
              and HR rounds with AI-powered mock interviews, 
              company-specific question banks, and personalized 
              performance insights.

            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <Link to="/register">
              <Button>
                Get Started
              </Button>
            </Link>

              <a href="#features">
              <Button className="!bg-white !text-slate-900 border border-slate-300 hover:!bg-slate-100">
                Explore Features
              </Button>
              </a>

            </div>
{/* Statistics Section */}
            <div className="mt-12 grid grid-cols-3 gap-6 text-center">

                <div>
                    <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                        10K+
                    </h3>

                    <p className="mt-1 text-sm text-slate-500 sm:text-base">
                        Interview Questions
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                        50+
                    </h3>

                    <p className="mt-1 text-sm text-slate-500 sm:text-base">
                        Top Companies
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                        95%
                    </h3>

                    <p className="mt-1 text-sm text-slate-500 sm:text-base">
                        Success Rate
                    </p>
                </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

            <div className="relative hidden min-h-[550px] items-center justify-center lg:flex">

            <div className="absolute top-0 right-12">

                <FloatingCard
                title="Interview Score"
                value="92%"
                subtitle="Excellent Performance"
                />

            </div>

            <div className="absolute top-44 left-0">

                <FloatingCard
                title="Google Interview"
                value="Completed"
                subtitle="DSA Round"
                />

            </div>

            <div className="absolute bottom-0 right-0">

                <FloatingCard
                title="Today's Challenge"
                value="Two Sum"
                subtitle="Easy"
                />

            </div>

            </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;