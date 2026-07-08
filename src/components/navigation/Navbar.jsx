import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import Button from "../common/Button";
import Container from "../common/Container";
import navLinks from "../../constants/navLinks";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">

      <Container>

        <div className="flex justify-between items-center h-20">

          {/* Logo */}

          <NavLink
            to="/"
            className="text-2xl font-bold text-blue-600"
          >
            PrepHire
          </NavLink>

          {/* Navigation */}

          <div className="hidden md:flex items-center gap-10 text-slate-700 font-medium">


            {navLinks.map((link) => {
              if (link.type === "route") {
                return (
                  <NavLink
                    key={link.label}
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-600 font-semibold"
                        : "hover:text-blue-600 transition-colors"
                    }
                  >
                    {link.label}
                  </NavLink>
                );
              }

              return (
                <a
                  key={link.label}
                  href={`#${link.id}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </a>
              );
            })}

          </div>

          {/* Right */}

          <div className="flex items-center gap-5">

            <FaUserCircle
              size={32}
              className="text-slate-600 cursor-pointer"
            />

          <Link to="/login">
            <Button>
              Login
            </Button>
          </Link>
          </div>

        </div>

      </Container>

    </nav>
  );
}

export default Navbar;