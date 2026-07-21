import { useState } from "react";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import Button from "../common/Button";
import Container from "../common/Container";
import navLinks from "../../constants/navLinks";

import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

          <div className="hidden lg:flex items-center gap-10 text-slate-700 font-medium">


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

          <div className="flex items-center gap-4">

          <FaUserCircle
            size={30}
            className="hidden cursor-pointer text-slate-600 lg:block"
          />

          <Link to="/login" className="hidden lg:block">
            <Button>Login</Button>
          </Link>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-2xl text-slate-700 lg:hidden"
          >
            <FaBars />
          </button>
          </div>

        </div>

      </Container>



      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          <div className="fixed top-0 right-0 z-50 flex h-full w-72 flex-col bg-white shadow-2xl lg:hidden">

            <div className="flex items-center justify-between border-b border-slate-200 p-5">
              <h2 className="text-xl font-bold text-blue-600">
                PrepHire
              </h2>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl text-slate-700"
              >
                <FaTimes />
              </button>
            </div>

            <div className="flex flex-1 flex-col gap-6 p-6">

              {navLinks.map((link) => {
                if (link.type === "route") {
                  return (
                    <NavLink
                      key={link.label}
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-lg font-medium text-slate-700 hover:text-blue-600"
                    >
                      {link.label}
                    </NavLink>
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={`#${link.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-slate-700 hover:text-blue-600"
                  >
                    {link.label}
                  </a>
                );
              })}

              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full">
                  Login
                </Button>
              </Link>

            </div>

          </div>
        </>
      )}
    

    </nav>
  );
}

export default Navbar;