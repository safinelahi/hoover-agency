import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import logoImage from "../../assets/logos/hoover.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Motion variants for mobile menu
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <header className="w-full flex justify-center py-4 bg-white relative z-50">
      <div className="w-[85%] max-w-[780px] bg-[#0047FF] text-white rounded-2xl flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logoImage} alt="Logo" className="h-14 w-auto object-contain" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-base font-medium">
          <Link to="/" className="text-[#FDFDFD] text-base font-normal">
            Projects
          </Link>
          <Link to="/services" className="text-[#FDFDFD] text-base font-normal">
            Services
          </Link>
          <Link to="/custom-template" className="text-[#FDFDFD] text-base font-normal">
            Custom Template
          </Link>

          <button className="flex items-center gap-3.5 text-[#FDFDFD] font-semibold">
            Book a Quick Call
            <motion.span
              className="bg-black text-white flex items-center justify-center rounded-lg h-10 w-10"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }}
            >
              <FiArrowUpRight size={22} />
            </motion.span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white text-2xl">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu with Motion */}
      {menuOpen && (
        <motion.div
          className="absolute top-full left-1/2 -translate-x-1/2 w-[100%] bg-[#0047FF] text-white flex flex-col items-center gap-4 py-6 md:hidden shadow-lg z-40"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={mobileMenuVariants}
        >
          <Link to="/" className="text-[#FDFDFD] text-base font-normal">
            Projects
          </Link>
          <Link to="/services" className="text-[#FDFDFD] text-base font-normal">
            Services
          </Link>
          <Link to="/custom-template" className="text-[#FDFDFD] text-base font-normal">
            Custom Template
          </Link>

          <button className="flex items-center justify-center ml-3 gap-3.5 text-[#FDFDFD] font-semibold">
            Book a Quick Call
            <motion.span
              className="bg-black text-white flex items-center justify-center rounded-lg h-10 w-10"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }}
            >
              <FiArrowUpRight size={22} />
            </motion.span>
          </button>
        </motion.div>
      )}
    </header>
  );
}

export default NavBar;
