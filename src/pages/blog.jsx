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
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=800&auto=format&fit=crop",
            category: "Emergency"
        }
    ];

    const categories = ["All", "Nutrition", "Exercise", "Prevention", "Education", "Wellness", "Emergency"];

    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-medical-lightblue to-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
                        Heart Health Insights
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed animate-fade-in">
                        Evidence-based articles on cardiovascular health, prevention strategies,
                        and wellness tips from Dr. Olulana.
                    </p>
                </div>
            </section>

            {/* Categories */}
            <section className="py-8 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${category === "All"
                                        ? "bg-medical-blue text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-medical-lightblue hover:text-medical-blue"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-16 bg-medical-lightgray">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <Card key={post.slug} className={`bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-t-lg">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-medical-blue text-white px-3 py-1 rounded-full text-xs font-medium">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                                <CardContent className="p-6">
                                    <div className="flex items-center text-sm text-gray-500 mb-3">
                                        <time>{post.date}</time>
                                        <span className="mx-2">•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-medical-blue transition-colors duration-200">
                                        <Link to={`/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <Link
                                        to={`/blog/${post.slug}`}
                                        className="inline-flex items-center text-medical-blue font-medium hover:text-blue-700 transition-colors duration-200"
                                    >
                                        Read More
                                        <span className="ml-2">→</span>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-medical-blue">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Stay Updated</h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Subscribe to receive the latest heart health insights and tips directly in your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-lg border-0 text-gray-900 placeholder-gray-500"
                        />
                        <button className="bg-white text-medical-blue px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;