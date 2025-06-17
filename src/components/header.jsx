import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import LOGO from "../assets/images/DO-LOGO.png"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navigation = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Blog", href: "/blog" },
    ];

    const isActive = (href) => {
        if (href === "/" && location.pathname === "/") return true;
        if (href !== "/" && location.pathname.startsWith(href)) return true;
        return false;
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-gray-100 transition-all duration-300 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center group">
                        <div>
                            <img src={LOGO} alt="logo" className="size-24"  />
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="text-xl font-semibold text-black font-poppins">Dr. Olulana</h1>
                            <p className="text-sm text-white font-jost">Consultant Cardiologist</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`group font-jost text-sm font-medium transition-colors duration-200 relative hover:text-medical-blue ${isActive(item.href) ? "text-medical-darkblue" : "text-white"
                                    }`}
                            >
                                {item.name}
                                {isActive(item.href) && (
                                    <div className="group-hover:bg-medical-blue absolute -bottom-1 left-0 right-0 h-0.5 bg-medical-darkblue rounded-full duration-200"></div>
                                )}
                            </Link>
                        ))}
                        <Button
                            asChild
                            className="bg-medical-blue hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-200 hover:shadow-lg"
                        >
                            <Link to="/#appointment">Book Appointment</Link>
                        </Button>
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <div className="w-6 h-6 flex flex-col justify-center items-center">
                            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-gray-700 mt-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-gray-700 mt-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <nav className="py-4 space-y-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`font-jost block text-sm font-medium transition-colors duration-200 ${isActive(item.href) ? "text-medical-blue font-jost " : "font-jost text-gray-700"
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button
                            asChild
                            className="w-full bg-medical-darkblue/20 hover:bg-medical-darkblue text-white mt-4"
                        >
                            <Link to="/#appointment" onClick={() => setIsMenuOpen(false)}>Book Appointment</Link>
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;