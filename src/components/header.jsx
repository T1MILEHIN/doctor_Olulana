import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center space-x-2 group">
                        <div className="w-10 h-10 bg-medical-blue rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                            <span className="text-white font-bold text-lg">DO</span>
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="text-xl font-semibold text-gray-900">Dr. Olulana</h1>
                            <p className="text-sm text-medical-gray">Consultant Cardiologist</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`text-sm font-medium transition-colors duration-200 relative hover:text-medical-blue ${isActive(item.href) ? "text-medical-blue" : "text-gray-700"
                                    }`}
                            >
                                {item.name}
                                {isActive(item.href) && (
                                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-medical-blue rounded-full"></div>
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
                                className={`block text-sm font-medium transition-colors duration-200 ${isActive(item.href) ? "text-medical-blue" : "text-gray-700"
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button
                            asChild
                            className="w-full bg-medical-blue hover:bg-blue-700 text-white mt-4"
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