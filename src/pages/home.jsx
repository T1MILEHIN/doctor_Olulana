import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="pt-16">
            <section className="relative bg-gradient-to-br from-medical-lightblue to-white py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-fade-in-up">
                            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                                Caring for Your <span className="text-medical-blue">Heart</span> Health
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Board-certified Consultant Cardiologist with over 15 years of experience in
                                preventive cardiology and advanced heart disease management.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-medical-blue hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg transition-all duration-200 hover:shadow-lg"
                                >
                                    <a href="#appointment">Book Consultation</a>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white px-8 py-4 text-lg rounded-lg transition-all duration-200"
                                >
                                    <Link to="/about">Learn About Me</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="animate-fade-in flex justify-center lg:justify-end">
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=800&auto=format&fit=crop"
                                    alt="Dr. Olulana"
                                    className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl border-8 border-white"
                                />
                                <div className="absolute -bottom-4 -right-4 bg-medical-blue text-white p-4 rounded-full shadow-lg">
                                    <span className="text-2xl">❤️</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Credentials Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center group hover:scale-105 transition-transform duration-300">
                            <div className="bg-medical-lightblue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-medical-blue transition-colors duration-300">
                                <span className="text-medical-blue group-hover:text-white text-2xl font-bold">15+</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Years Experience</h3>
                            <p className="text-gray-600">Dedicated to exceptional cardiac care</p>
                        </div>
                        <div className="text-center group hover:scale-105 transition-transform duration-300">
                            <div className="bg-medical-lightblue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-medical-blue transition-colors duration-300">
                                <span className="text-medical-blue group-hover:text-white text-2xl font-bold">1K+</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Patients Treated</h3>
                            <p className="text-gray-600">Trusted by patients nationwide</p>
                        </div>
                        <div className="text-center group hover:scale-105 transition-transform duration-300">
                            <div className="bg-medical-lightblue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-medical-blue transition-colors duration-300">
                                <span className="text-medical-blue group-hover:text-white text-2xl">🏆</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Award Winner</h3>
                            <p className="text-gray-600">Excellence in cardiovascular medicine</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Testimonial */}
            <section className="py-16 bg-medical-lightgray">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">What Patients Say</h2>
                    <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-8">
                            <div className="flex justify-center mb-6">
                                <div className="flex text-yellow-400 text-2xl">
                                    ⭐⭐⭐⭐⭐
                                </div>
                            </div>
                            <blockquote className="text-xl text-gray-700 mb-6 italic leading-relaxed">
                                "Dr. Olulana saved my life. Her expertise in preventive cardiology and compassionate care
                                helped me understand my condition and make the lifestyle changes I needed. I couldn't be more grateful."
                            </blockquote>
                            <div className="flex items-center justify-center space-x-4">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                                    alt="Patient testimonial"
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div className="text-left">
                                    <p className="font-semibold text-gray-900">Michael Rodriguez</p>
                                    <p className="text-gray-600 text-sm">Patient since 2021</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* CTA Section */}
            <section id="appointment" className="py-16 bg-medical-blue">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to Take Control of Your Heart Health?</h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Schedule a consultation today and start your journey toward better cardiovascular health.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-white text-medical-blue hover:bg-gray-100 px-8 py-4 text-lg rounded-lg transition-all duration-200 hover:shadow-lg"
                        >
                            Book Appointment
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white text-medical-blue hover:bg-white hover:text-medical-blue px-8 py-4 text-lg rounded-lg transition-all duration-200">
                            Call (555) 123-4567
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home