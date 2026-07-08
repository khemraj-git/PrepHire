import Button from "../../../components/common/Button";
import FloatingCard from "../../../components/common/FloatingCard";
function Hero() {
  return (
    <section className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}

          <div>

            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              🚀 Smart Interview Preparation Platform
            </span>

            <h1 className="text-6xl font-bold text-slate-900 mt-8 leading-tight">

              <span className="text-blue-600">Prepare Smarter.</span>
                <br />
                Interview Better.
                <br />
                Get Hired.

            </h1>

            <p className="text-slate-600 text-lg lg:text-xl mt-8 leading-8">

              Master technical interviews, coding assessments, 
              and HR rounds with AI-powered mock interviews, 
              company-specific question banks, and personalized 
              performance insights.

            </p>

            <div className="flex flex-col sm:flex-row gap-5 mt-10">

              <Button>

                Get Started

              </Button>

              <Button className="bg-white text-slate-900 border border-slate-300 hover:bg-slate-100">

                Explore Features

              </Button>

            </div>

            <div className="flex flex-wrap justify-between mt-12">

                <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                        10K+
                    </h3>

                    <p className="text-slate-500">
                        Interview Questions
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                        50+
                    </h3>

                    <p className="text-slate-500">
                        Top Companies
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                        95%
                    </h3>

                    <p className="text-slate-500">
                        Success Rate
                    </p>
                </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

            <div className="relative flex justify-center items-center min-h-[550px]">

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