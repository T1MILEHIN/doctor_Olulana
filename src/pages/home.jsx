import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="">
            {/* Hero Section with Enhanced Gradient */}
            <section className="relative bg-gradient-to-br from-blue-50 via-medical-lightblue to-medical-darkblue py-20 lg:py-32 overflow-hidden" style={{clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'}}>
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-fade-in-up">
                            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/50 mb-6 backdrop-blur-sm">
                                <span className="font-jost text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    ✨ Expert Cardiovascular Care
                                </span>
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Caring for Your{" "}
                                <span className="bg-gradient-to-r from-medical-blue via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
                                    Heart
                                </span>{" "}
                                Health
                            </h1>
                            <p className="font-jost text-xl text-white mb-8 leading-relaxed ">
                                Board-certified Consultant Cardiologist with over 15 years of experience in
                                preventive cardiology and advanced heart disease management.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                                >
                                    <a href="#appointment">Book Consultation</a>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="border-2 border-blue-200 text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 px-8 py-4 text-lg rounded-xl backdrop-blur-sm hover:border-purple-300 transition-all duration-300"
                                >
                                    <Link to="/about">Learn About Me</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="animate-fade-in flex justify-center lg:justify-end">
                            <div className="relative group">
                                <img
                                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=800&auto=format&fit=crop"
                                    alt="Dr. Olulana"
                                    className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl border-4 border-white transform group-hover:scale-105 transition-all duration-500"
                                />
                                <div className="absolute bottom-24 lg:-bottom-4 -right-4 bg-white text-white p-4 rounded-full shadow-lg animate-bounce">
                                    <span className="text-2xl">❤️</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Credentials Section */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { number: "15+", label: "Years Experience", desc: "Dedicated to exceptional cardiac care", gradient: "from-blue-500 to-cyan-500" },
                            { number: "1K+", label: "Patients Treated", desc: "Trusted by patients nationwide", gradient: "from-purple-500 to-pink-500" },
                            { number: "🏆", label: "Award Winner", desc: "Excellence in cardiovascular medicine", gradient: "from-indigo-500 to-blue-500" }
                        ].map((item, index) => (
                            <div key={index} className="text-center group hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                                <div className={`bg-gradient-to-br ${item.gradient} rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-6`}>
                                    <span className="text-white text-2xl font-bold">{item.number}</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.label}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modern Testimonial Section */}
            <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-white">
                <section className="py-20 relative overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute top-32 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-32 right-1/4 w-72 h-72 bg-gradient-to-br from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
                    </div>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/50 mb-8 backdrop-blur-sm">
                            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                ⭐ Patient Testimonials
                            </span>
                        </div>
                        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">What Patients Say</h2>
                        <Card className="bg-white/80 backdrop-blur-sm shadow-2xl border-0 hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-2xl overflow-hidden">
                            <CardContent className="p-10">
                                <div className="flex justify-center mb-6">
                                    <div className="flex text-yellow-400 text-3xl space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>⭐</span>
                                        ))}
                                    </div>
                                </div>
                                <blockquote className="text-xl text-gray-700 mb-8 italic leading-relaxed">
                                    "Dr. Johnson saved my life. Her expertise in preventive cardiology and compassionate care
                                    helped me understand my condition and make the lifestyle changes I needed. I couldn't be more grateful."
                                </blockquote>
                                <div className="flex items-center justify-center space-x-4">
                                    <div className="relative">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur opacity-75"></div>
                                        <img
                                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                                            alt="Patient testimonial"
                                            className="relative w-16 h-16 rounded-full object-cover"
                                        />
                                    </div>
                                    <div className="text-left">
                                        <p className="font-semibold text-gray-900">Michael Rodriguez</p>
                                        <p className="text-gray-600 text-sm">Patient since 2021</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
                {/* Enhanced CTA Section */}
                <section style={{clipPath: 'polygon(0 15%, 100% 0, 100% 85%, 0 100%)'}} id="appointment" className="py-20 bg-medical-darkblue relative overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-800/20 to-purple-800/20"></div>
                        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                    </div>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-8 backdrop-blur-sm">
                            <span className="text-sm font-medium text-white">
                                📅 Schedule Your Visit
                            </span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-6">Ready to Take Control of Your Heart Health?</h2>
                        <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                            Schedule a consultation today and start your journey toward better cardiovascular health.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button size="lg" className="bg-white text-medical-darkblue hover:bg-gray-100 px-10 py-4 text-lg rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 font-semibold">
                                Book Appointment
                            </Button>
                            <Button size="lg" variant="outline" className="text-white hover:bg-white hover:text-medical-darkblue bg-medical-darkblue px-10 py-4 text-lg rounded-xl backdrop-blur-sm transition-all duration-300 font-semibold">
                                Call (555) 123-4567
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home