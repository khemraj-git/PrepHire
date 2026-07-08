import Container from "../../../components/common/Container";

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <Container>

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h2 className="text-2xl font-bold text-white">
              PrepHire
            </h2>

            <p className="mt-4 text-slate-400 leading-7">
              A modern interview preparation platform helping students
              practice coding, mock interviews and resume building.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">
              Platform
            </h3>

            <ul className="space-y-3">
              <li>Mock Interview</li>
              <li>Coding Practice</li>
              <li>Question Bank</li>
              <li>Analytics</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">
              Company
            </h3>

            <ul className="space-y-3">
              <li>About</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">
              Connect
            </h3>

            <p>Email</p>
            <p className="mt-2">
              support@prephire.com
            </p>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-500">
          © 2026 PrepHire. All rights reserved.
        </div>

      </Container>
    </footer>
  );
}

export default Footer;