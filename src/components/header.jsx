import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LOGO from "../assets/images/DO-LOGO.png";

import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { IoLink } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
// import Mobilenav from "./mobilenav";
// import logo from "../assets/images/logo2.png";
// import logo2 from "../assets/images/logo-gold.png";
import { ImYoutube } from "react-icons/im";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
  ];
  const [bg, handleBg] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      handleBg(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const isActive = (href) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };
  const handleNav = () => setToggleNav((prev) => !prev);

  return (
    <header
      className={`z-[999999999999999999999] w-full fixed top-0 left-0 right-0 flex justify-between items-center px-6 md:px-20 transition-all duration-500 ${
        bg
          ? "bg-gradient-to-b from-black to-transparent dark:bg-gradient-to-b bg-opacity-50 dark:bg-opacity-50"
          : "bg-gradient-to-b from-black to-transparent dark:bg-gradient-to-b bg-opacity-50 dark:bg-opacity-50"
      }`}
    >
      <div className="flex-1">
        <div className="w-fit">
          <Link to="/" className="">
            <motion.img
              src={bg ? LOGO : LOGO}
              alt="logo"
              className="size-30 object-contain "
              initial={{ rotateY: 0 }}
              animate={{ rotateY: bg ? 360 : 0 }}
              transition={{ duration: 0.5 }}
              style={{ perspective: "1000px" }}
            />
          </Link>
        </div>
      </div>

      <nav className="hidden md:flex justify-center flex-1">
        <ul
          className={`*:font-quicksand flex items-center gap-8 text-base font-bold transition-colors duration-500 ${
            bg ? "text-black" : "text-white"
          }`}
        >
          <li className="hover:opacity-70 duration-300">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-text_gold font-quicksand"
                  : "text-white font-quicksand"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="hover:opacity-70 duration-300">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-text_gold font-quicksand"
                  : "text-white font-quicksand"
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="hover:opacity-70 duration-300">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-text_gold font-quicksand"
                  : "text-white font-quicksand"
              }
              to="/gallery"
            >
              Films
            </NavLink>
          </li>
          <li className="hover:opacity-70 duration-300">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-text_gold font-quicksand"
                  : "text-white font-quicksand"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="hidden md:flex flex-1 text-2xl items-center gap-7 text-white justify-end">
        <div className="p-1.5 grid place-content-center rounded-full border-2 border-white hover:bg-white hover:text-black duration-200">
          <FaInstagram href="https://www.instagram.com/bamsvisuals/" />
        </div>
        <div className="p-1.5 grid place-content-center rounded-full border-2 border-white hover:bg-white hover:text-black duration-200">
          <MdMailOutline href="https://www.youtube.com/@BamsVisuals" />
        </div>
        <div className="p-1.5 grid place-content-center rounded-full border-2 border-white hover:bg-white hover:text-black duration-200">
          {/* <IoLink /> */}
          <ImYoutube href="https://www.youtube.com/@BamsVisuals" />
        </div>
        <button className="duration-200 text-sm border-2 border-white p-3 px-6 hover:bg-white text-white hover:text-black">
          <a href="/contact"> Hire Us</a>
        </button>
      </div>

      {/* Mobile Navigation Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ rotate: 90 }}
        onClick={handleNav}
        className="md:hidden block relative z-10"
      >
        {toggleNav ? (
          <FaXmark size={24} className={bg ? "text-black" : "text-white"} />
        ) : (
          <FaBars size={24} className={bg ? "text-black" : "text-white"} />
        )}
      </motion.div>

      <AnimatePresence>
        {/* {toggleNav && <Mobilenav handleNav={handleNav} />} */}
      </AnimatePresence>
    </header>
  );
  // return (
  //     <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-gray-100 transition-all duration-300 py-4">
  //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
  //             <div className="flex justify-between items-center h-16">
  //                 <Link to="/" className="flex items-center group">
  //                     <div>
  //                         <img src={LOGO} alt="logo" className="size-40"  />
  //                     </div>
  //                     <div className="hidden sm:block">
  //                         <h1 className="text-xl font-semibold text-black font-poppins"> Doctor Olulana</h1>
  //                         {/* <p className="text-sm text-white font-jost">Consultant Cardiologist</p> */}
  //                     </div>
  //                 </Link>

  //                 <nav className="hidden md:flex items-center space-x-8">
  //                     {navigation.map((item) => (
  //                         <Link
  //                             key={item.name}
  //                             to={item.href}
  //                             className={`group font-jost text-sm font-medium transition-colors duration-200 relative hover:text-medical-blue ${isActive(item.href) ? "text-medical-darkblue" : ""}`}
  //                         >
  //                             {item.name}
  //                             {isActive(item.href) && (
  //                                 <div className="group-hover:bg-medical-blue absolute -bottom-1 left-0 right-0 h-0.5 bg-medical-darkblue rounded-full duration-200"></div>
  //                             )}
  //                         </Link>
  //                     ))}
  //                     <Button
  //                         asChild
  //                         className="bg-medical-blue hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-200 hover:shadow-lg"
  //                     >
  //                         <Link to="/#appointment">Instagrom Live </Link>
  //                     </Button>
  //                 </nav>

  //                 {/* Mobile menu button */}
  //                 <button
  //                     className="md:hidden p-2"
  //                     onClick={() => setIsMenuOpen(!isMenuOpen)}
  //                 >
  //                     <div className="w-6 h-6 flex flex-col justify-center items-center">
  //                         <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 origin-center ${isMenuOpen ? ' rotate-45 translate-y-1' : ''}`}></span>
  //                         <span className={`block w-6 h-0.5 bg-gray-700 mt-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
  //                         <span className={`block w-6 h-0.5 bg-gray-700 mt-1 transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
  //                     </div>
  //                 </button>
  //             </div>

  //             {/* Mobile Navigation */}
  //             <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
  //                 <nav className="py-4 space-y-4">
  //                     {navigation.map((item) => (
  //                         <Link
  //                             key={item.name}
  //                             to={item.href}
  //                             className={`font-jost block text-sm font-medium transition-colors duration-200 ${isActive(item.href) ? "text-medical-blue font-jost " : "font-jost text-gray-700"
  //                                 }`}
  //                             onClick={() => setIsMenuOpen(false)}
  //                         >
  //                             {item.name}
  //                         </Link>
  //                     ))}
  //                     <Button
  //                         asChild
  //                         className="w-full bg-medical-darkblue/20 hover:bg-medical-darkblue text-white mt-4"
  //                     >
  //                         <Link to="/#appointment" onClick={() => setIsMenuOpen(false)}>Book Appointment</Link>
  //                     </Button>
  //                 </nav>
  //             </div>
  //         </div>
  //     </header>
  // );
};

export default Header;
