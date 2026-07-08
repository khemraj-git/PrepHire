import { FaUserCircle } from "react-icons/fa";
import Button from "../common/Button";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex justify-between items-center h-20">

          {/* Logo */}

          <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
            PrepHire
          </h1>

          {/* Navigation */}

          <div className="hidden md:flex items-center gap-10 text-slate-700 font-medium">

            <a href="#">Home</a>

            <a href="#">Features</a>

            <a href="#">Companies</a>

            <a href="#">Mock Interview</a>

            <a href="#">Dashboard</a>

          </div>

          {/* Right */}

          <div className="flex items-center gap-5">

            <FaUserCircle
              size={32}
              className="text-slate-600 cursor-pointer"
            />

            <Button>

              Login

            </Button>

          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;