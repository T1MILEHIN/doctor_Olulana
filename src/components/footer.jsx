import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Information */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
                        <div className="space-y-2 text-gray-600">
                            <p>📍 123 Medical Center Drive</p>
                            <p>New York, NY 10001</p>
                            <p>📞 (555) 123-4567</p>
                            <p>✉️ contact@drOlulana.com</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
                        <div className="space-y-2">
                            <Link to="/" className="block text-gray-600 hover:text-medical-blue transition-colors duration-200">
                                Home
                            </Link>
                            <Link to="/about" className="block text-gray-600 hover:text-medical-blue transition-colors duration-200">
                                About
                            </Link>
                            <Link to="/blog" className="block text-gray-600 hover:text-medical-blue transition-colors duration-200">
                                Blog
                            </Link>
                        </div>
                    </div>

                    {/* Office Hours & Social */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Office Hours</h3>
                        <div className="space-y-2 text-gray-600">
                            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                            <p>Saturday: 9:00 AM - 2:00 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                        <div className="flex space-x-4 pt-4">
                            <a href="#" className="text-gray-400 hover:text-medical-blue transition-colors duration-200">
                                LinkedIn
                            </a>
                            <a href="#" className="text-gray-400 hover:text-medical-blue transition-colors duration-200">
                                Twitter
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 mt-8 pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Dr. Olulana. All rights reserved. | Professional medical services in New York.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;