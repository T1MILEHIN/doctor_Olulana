import { Card, CardContent } from "@/components/ui/card";

const About = () => {
    const specializations = [
        "Preventive Cardiology",
        "Heart Disease Management",
        "Cardiac Rehabilitation",
        "Hypertension Treatment",
        "Cholesterol Management",
        "Interventional Cardiology"
    ];

    const certifications = [
        "Board Certified in Cardiovascular Disease",
        "Board Certified in Internal Medicine",
        "Fellow of the American College of Cardiology",
        "Advanced Cardiac Life Support (ACLS)",
        "Interventional Cardiology Fellowship"
    ];

    return (
        <div className="">
            {/* Enhanced Hero Section */}
            <section className="py-28 lg:py-32 bg-gradient-to-br from-blue-50 via-medical-lightblue to-medical-darkblue relative overflow-hidden" style={{clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)'}}>
                <div className="absolute inset-0">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-fade-in-up">
                            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/50 mb-6 backdrop-blur-sm">
                                <span className="font-jost text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    👩‍⚕️ Meet Your Cardiologist
                                </span>
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                About{" "}
                                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                    Dr. Olulana
                                </span>
                            </h1>
                            <p className="text-xl text-white leading-relaxed font-jost">
                                With over 15 years of dedicated service in cardiovascular medicine,
                                I am committed to providing exceptional, personalized care to each of my patients.
                            </p>
                        </div>
                        <div className="animate-fade-in flex justify-center">
                            <div className="relative group">
                                <img
                                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=500&auto=format&fit=crop"
                                    alt="Dr. Olulana Johnson in her office"
                                    className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Biography Section */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/50 mb-6 backdrop-blur-sm">
                            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                📖 My Story
                            </span>
                        </div>
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">My Journey</h2>
                    </div>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
                        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                            <p>
                                I began my medical journey at Harvard Medical School, where I developed a deep passion for
                                cardiovascular medicine. After completing my residency in Internal Medicine at Johns Hopkins Hospital,
                                I pursued specialized training in Cardiology at Mayo Clinic, followed by an Interventional
                                Cardiology Fellowship at Cleveland Clinic.
                            </p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                            <p>
                                Throughout my career, I have been dedicated to advancing the field of preventive cardiology.
                                My research has been published in leading medical journals including the Journal of the American
                                College of Cardiology and Circulation. I believe that the best treatment is prevention, and I work
                                closely with each patient to develop personalized strategies for maintaining optimal heart health.
                            </p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                            <p>
                                Beyond clinical practice, I am actively involved in medical education, serving as a clinical
                                instructor at the local medical school and regularly speaking at cardiovascular conferences.
                                I am also committed to community health initiatives, organizing free heart health screenings
                                and educational seminars.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modern Specializations */}
            <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-br from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/50 mb-6 backdrop-blur-sm">
                            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                🏥 Expertise Areas
                            </span>
                        </div>
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Areas of Specialization</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {specializations.map((specialty, index) => (
                            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-2xl group overflow-hidden">
                                <CardContent className="p-8 text-center">
                                    <div className={`w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                                        <span className="text-white text-2xl">❤️</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{specialty}</h3>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced Certifications */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/50 mb-6 backdrop-blur-sm">
                            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                🎓 Credentials
                            </span>
                        </div>
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Certifications & Training</h2>
                    </div>
                    <div className="space-y-6">
                        {certifications.map((cert, index) => (
                            <div key={index} className="flex items-center space-x-6 p-6 bg-white/80 backdrop-blur-sm rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl group">
                                <div className="w-12 h-12 bg-gradient-to-br from-medical-blue to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <span className="text-white text-lg font-bold">✓</span>
                                </div>
                                <p className="text-gray-800 font-medium text-lg group-hover:text-blue-700 transition-colors duration-300">{cert}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced Philosophy */}
            <section className="py-20 bg-medical-darkblue relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-800/20 to-purple-800/20"></div>
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-8 backdrop-blur-sm">
                        <span className="text-sm font-medium text-white">
                            💭 My Philosophy
                        </span>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-10">My Philosophy</h2>
                    <div className="bg-white/10 backdrop-blur-sm p-10 rounded-2xl border border-white/20">
                        <blockquote className="text-xl text-blue-100 italic leading-relaxed mb-8">
                            "I believe that exceptional cardiovascular care goes beyond treating disease—it's about empowering
                            patients with knowledge, supporting them through their health journey, and working together to
                            achieve the best possible outcomes. Every patient deserves personalized, compassionate care that
                            addresses not just their physical health, but their overall well-being."
                        </blockquote>
                        <div className="flex items-center justify-center space-x-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                                <span className="text-white text-2xl">👩‍⚕️</span>
                            </div>
                            <div>
                                <p className="text-white font-semibold text-lg">Dr. Olulana</p>
                                <p className="text-blue-200 text-sm">Consultant Cardiologist</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;