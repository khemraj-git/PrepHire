import Container from "../../../components/common/Container";
import Button from "../../../components/common/Button";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="py-24 bg-blue-600">
      <Container>
        <div className="text-center text-white">

          <h2 className="text-4xl lg:text-5xl font-bold">
            Ready to Ace Your Next Interview?
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-blue-100 text-lg leading-8">
            Practice coding, improve communication skills, receive AI-powered
            feedback, and confidently prepare for interviews at your dream
            company.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">

            <Link to="/register">
              <Button className="!bg-white !text-blue-600 hover:!bg-slate-100">
                Create Free Account
              </Button>
            </Link>

            <Link to="/login">
              <Button className="bg-blue-700 border border-blue-400 hover:bg-blue-800">
                Sign In
              </Button>
            </Link>

          </div>

        </div>
      </Container>
    </section>
  );
}

export default CTA;