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
        <div className="pt-16">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-medical-lightblue to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-fade-in-up">
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                About Dr. Olulana
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                With over 15 years of dedicated service in cardiovascular medicine,
                                I am committed to providing exceptional, personalized care to each of my patients.
                            </p>
                        </div>
                        <div className="animate-fade-in flex justify-center">
                            <img
                                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=500&auto=format&fit=crop"
                                alt="Dr. Olulana in her office"
                                className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Biography Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">My Journey</h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                        <p>
                            I began my medical journey at Harvard Medical School, where I developed a deep passion for
                            cardiovascular medicine. After completing my residency in Internal Medicine at Johns Hopkins Hospital,
                            I pursued specialized training in Cardiology at Mayo Clinic, followed by an Interventional
                            Cardiology Fellowship at Cleveland Clinic.
                        </p>
                        <p>
                            Throughout my career, I have been dedicated to advancing the field of preventive cardiology.
                            My research has been published in leading medical journals including the Journal of the American
                            College of Cardiology and Circulation. I believe that the best treatment is prevention, and I work
                            closely with each patient to develop personalized strategies for maintaining optimal heart health.
                        </p>
                        <p>
                            Beyond clinical practice, I am actively involved in medical education, serving as a clinical
                            instructor at the local medical school and regularly speaking at cardiovascular conferences.
                            I am also committed to community health initiatives, organizing free heart health screenings
                            and educational seminars.
                        </p>
                    </div>
                </div>
            </section>

            {/* Specializations */}
            <section className="py-16 bg-medical-lightgray">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Areas of Specialization</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {specializations.map((specialty, index) => (
                            <Card key={index} className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="p-6 text-center">
                                    <div className="w-12 h-12 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white text-xl">❤️</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">{specialty}</h3>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Certifications & Training</h2>
                    <div className="space-y-4">
                        {certifications.map((cert, index) => (
                            <div key={index} className="flex items-center space-x-4 p-4 bg-medical-lightblue rounded-lg hover:bg-blue-100 transition-colors duration-200">
                                <div className="w-8 h-8 bg-medical-blue rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-white text-sm">✓</span>
                                </div>
                                <p className="text-gray-800 font-medium">{cert}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="py-16 bg-medical-blue">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-8">My Philosophy</h2>
                    <blockquote className="text-xl text-blue-100 italic leading-relaxed">
                        "I believe that exceptional cardiovascular care goes beyond treating disease—it's about empowering
                        patients with knowledge, supporting them through their health journey, and working together to
                        achieve the best possible outcomes. Every patient deserves personalized, compassionate care that
                        addresses not just their physical health, but their overall well-being."
                    </blockquote>
                    <div className="mt-8">
                        <p className="text-white font-semibold text-lg">- Dr. Olulana, MD, FACC</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;