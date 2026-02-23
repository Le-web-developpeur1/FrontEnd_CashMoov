import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Bordure sur le header
  // border-b border-[#F7CE47]/50

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-[#2A4793] to-[#1f356d] shadow-md fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-2 md:py-2.5 flex justify-between items-center">

        <NavLink to="/" className="flex items-center">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            src="/images/PNG.png"
            alt="Logo Cash Moov"
            className="w-8 md:w-12 h-auto"
          />
        </NavLink>

        <div className="hidden md:flex items-center gap-8 text-white font-medium">

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <NavLink to="/" className="hover:text-[#F7CE47] transition">
              Accueil
            </NavLink>
          </motion.div>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="hover:text-[#F7CE47] transition">
              Nos Services
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute left-0 mt-2 w-48 bg-[#1f356d] border border-[#2A4793] shadow-lg rounded-md py-2"
                >
                  <NavLink
                    to="/services-particuliers"
                    className="block px-4 py-2 hover:bg-[#2A4793] text-white"
                  >
                    Particuliers
                  </NavLink>

                  <div className="border-b my-1 border-[#2A4793]"></div>

                  <NavLink
                    to="/services-entreprises"
                    className="block px-4 py-2 hover:bg-[#2A4793] text-white"
                  >
                    Entreprises
                  </NavLink>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/notre-reseau" className="hover:text-[#F7CE47] transition">
            Notre Réseau
          </NavLink>
          <NavLink to="/about" className="hover:text-[#F7CE47] transition">
            A propos
          </NavLink>

          <NavLink to="/contact" className="hover:text-[#F7CE47] transition">
            Contact
          </NavLink>
        </div>

        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          animate={{ rotate: menuOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden"
        >
          <svg
            className="w-10 h-10 md:w-6 md:h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                menuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </motion.button>
       
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col items-center gap-4 pb-4 text-white font-medium"
          >
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Accueil
            </NavLink>

            <div className="w-full flex flex-col items-center">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="hover:text-[#F7CE47] transition"
              >
                Nos Services
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="w-56 mt-2 bg-[#1f356d] border border-[#2A4793] shadow-lg rounded-md py-2"
                  >
                    <NavLink
                      to="/services-particuliers"
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 py-2 hover:bg-[#2A4793] text-white"
                    >
                      Particuliers
                    </NavLink>

                    <NavLink
                      to="/services-entreprises"
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 py-2 hover:bg-[#2A4793] text-white"
                    >
                      Entreprises
                    </NavLink>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/notre-reseau" onClick={() => setMenuOpen(false)}>
              Notre Réseau
            </NavLink>

            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              A propos
            </NavLink>

            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
