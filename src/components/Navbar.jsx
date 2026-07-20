import { useEffect, useRef, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

import { navLinks, resumeLink } from "../constants";
import { scrollToSection } from "../lib/helperFunctions";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20 || currentScrollY < lastScrollY.current) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false);
        setToggle(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setToggle(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleNavigation = (sectionId) => {
    scrollToSection(sectionId);
    setToggle(false);
  };

  const handleHomeClick = (event) => {
    event.preventDefault();
    scrollToSection("home");
    setToggle(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: showNavbar ? 0 : -110 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="nav-styles sm:px-16 px-6"
      aria-label="Main navigation"
    >
      <a
        href="#home"
        onClick={handleHomeClick}
        aria-label="Go to home section"
        className="flex items-center gap-3"
      >
        <div className="w-11 h-11 rounded-full bg-blue-gradient p-[2px]">
          <div className="w-full h-full rounded-full bg-primary flex items-center justify-center">
            <span className="font-poppins font-bold text-[18px] text-gradient">
              DK
            </span>
          </div>
        </div>

        <div className="hidden xs:block">
          <p className="font-poppins font-semibold text-white text-[17px] leading-[20px]">
            Dev Kothari
          </p>

          <p className="font-poppins text-dimWhite text-[11px] leading-[16px]">
            Full Stack Developer
          </p>
        </div>
      </a>

      {/* Desktop navigation */}
      <div className="hidden sm:flex flex-1 justify-end items-center">
        <ul className="list-none flex justify-end items-center">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal text-[15px]
                text-white hover:text-teal-200 transition-colors duration-200
                ${index === navLinks.length - 1 ? "mr-0" : "mr-8"}`}
            >
              <button
                type="button"
                onClick={() => handleNavigation(nav.id)}
                className="bg-transparent border-none cursor-pointer text-inherit"
              >
                {nav.title}
              </button>
            </li>
          ))}
        </ul>

        <a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-8 px-5 py-2 rounded-lg bg-blue-gradient font-poppins font-medium text-[14px] text-primary hover:scale-105 transition-transform duration-200"
        >
          Resume
        </a>
      </div>

      {/* Mobile navigation */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <button
          type="button"
          onClick={() => setToggle((previous) => !previous)}
          aria-label={toggle ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={toggle}
          aria-controls="mobile-navigation"
          className="relative z-50 flex items-center justify-center text-white hover:text-teal-200 transition-colors duration-200"
        >
          {toggle ? (
            <IoClose size={30} aria-hidden="true" />
          ) : (
            <HiMenuAlt3 size={30} aria-hidden="true" />
          )}
        </button>

        <div
          id="mobile-navigation"
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-4 min-w-[210px] rounded-xl sidebar shadow-2xl z-40`}
        >
          <ul className="list-none flex flex-col items-start w-full">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="font-poppins font-normal text-[16px] text-white hover:text-teal-200 transition-colors duration-200 mb-4 w-full"
              >
                <button
                  type="button"
                  onClick={() => handleNavigation(nav.id)}
                  className="w-full text-left bg-transparent border-none cursor-pointer text-inherit"
                >
                  {nav.title}
                </button>
              </li>
            ))}

            <li className="w-full mt-1">
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setToggle(false)}
                className="flex justify-center w-full px-4 py-2 rounded-lg bg-blue-gradient font-poppins font-medium text-[15px] text-primary"
              >
                View Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;