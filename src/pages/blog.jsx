import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Blog = () => {
    const blogPosts = [
        {
            slug: "heart-healthy-diet-guide",
            title: "The Complete Guide to a Heart-Healthy Diet",
            excerpt: "Discover the essential foods and nutrients that support cardiovascular health, plus practical meal planning tips from a cardiologist's perspective.",
            date: "March 15, 2024",
            readTime: "8 min read",
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop",
            category: "Nutrition"
        },
        {
            slug: "exercise-heart-health",
            title: "Exercise and Heart Health: What You Need to Know",
            excerpt: "Learn how different types of exercise benefit your cardiovascular system and how to create a safe, effective workout routine.",
            date: "March 8, 2024",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
            category: "Exercise"
        },
        {
            slug: "managing-high-blood-pressure",
            title: "Managing High Blood Pressure: A Comprehensive Approach",
            excerpt: "Understanding hypertension and proven strategies for managing blood pressure through lifestyle changes and medical treatment.",
            date: "February 28, 2024",
            readTime: "10 min read",
            image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=800&auto=format&fit=crop",
            category: "Prevention"
        },
        {
            slug: "cholesterol-myths-facts",
            title: "Cholesterol: Separating Myths from Facts",
            excerpt: "Get the truth about cholesterol, including good vs. bad cholesterol, dietary impacts, and when medication might be necessary.",
            date: "February 20, 2024",
            readTime: "7 min read",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=800&auto=format&fit=crop",
            category: "Education"
        },
        {
            slug: "stress-heart-connection",
            title: "The Hidden Connection Between Stress and Heart Disease",
            excerpt: "Explore how chronic stress affects your cardiovascular system and learn evidence-based techniques for stress management.",
            date: "February 12, 2024",
            readTime: "9 min read",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
            category: "Wellness"
        },
        {
            slug: "heart-attack-warning-signs",
            title: "Recognizing Heart Attack Warning Signs: Could Save Your Life",
            excerpt: "Learn to identify the early warning signs of a heart attack, including symptoms that are often overlooked, especially in women.",
            date: "February 5, 2024",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop",
            category: "Emergency"
        }
    ];

    const categories = ["All", "Nutrition", "Exercise", "Prevention", "Education", "Wellness", "Emergency"];

    const getCategoryGradient = (category) => {
        const gradients = {
            "Nutrition": "from-green-500 to-emerald-500",
            "Exercise": "from-orange-500 to-red-500",
            "Prevention": "from-blue-500 to-cyan-500",
            "Education": "from-purple-500 to-pink-500",
            "Wellness": "from-indigo-500 to-purple-500",
            "Emergency": "from-red-500 to-pink-500"
        };
        return gradients[category] || "from-blue-500 to-purple-500";
    };

    return (
        <div className="">
            {/* Enhanced Hero Section */}
            <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-medical-lightblue to-medical-darkblue relative overflow-hidden" style={{clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'}}>
                <div className="absolute inset-0">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/50 mb-8 backdrop-blur-sm">
                        <span className="font-jost text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            📚 Medical Insights
                        </span>
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
                        Heart Health{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                            Insights
                        </span>
                    </h1>
                    <p className="font-jost text-xl text-white leading-relaxed animate-fade-in">
                        Evidence-based articles on cardiovascular health, prevention strategies,
                        and wellness tips from Dr. Olulana
                    </p>
                </div>
            </section>

            {/* Enhanced Categories */}
            <section className="py-12 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`font-jost px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${category === "All"
                                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-blue-500/25"
                                        : "bg-white text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 border border-gray-200 hover:border-blue-300"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced Blog Grid */}
            <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-br from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <Card key={post.slug} className={`bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-fade-in rounded-2xl overflow-hidden group`} style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="relative overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute top-4 left-4">
                                        <span className={`bg-gradient-to-r ${getCategoryGradient(post.category)} text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg`}>
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                                <CardContent className="p-6">
                                    <div className="font-jost flex items-center text-sm text-gray-500 mb-3">
                                        <time>{post.date}</time>
                                        <span className="mx-2">•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-medical-blue transition-colors duration-300">
                                        <Link to={`/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p className="font-jost text-gray-600 mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <Link
                                        to={`/blog/${post.slug}`}
                                        className="inline-flex items-center text-medical-blue font-medium hover:text-purple-600 transition-colors duration-300 group-hover:translate-x-1"
                                    >
                                        Read More
                                        <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced Newsletter CTA */}
            <section className="py-20 bg-medical-darkblue relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-800/20 to-purple-800/20"></div>
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-8 backdrop-blur-sm">
                        <span className="text-sm font-medium text-white">
                            📧 Stay Connected
                        </span>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
                    <p className="text-xl text-blue-100 mb-10">
                        Subscribe to receive the latest heart health insights and tips directly in your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-4 rounded-xl border-0 text-gray-900 placeholder-gray-500 shadow-lg backdrop-blur-sm bg-white/90 focus:ring-2 focus:ring-white/50 focus:outline-none transition-all duration-300"
                        />
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;