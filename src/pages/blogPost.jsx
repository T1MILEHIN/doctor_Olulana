
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const BlogPost = () => {
    // const { slug } = useParams();

    // Mock blog post data - in a real app, this would come from an API or CMS
    const blogPost = {
        title: "The Complete Guide to a Heart-Healthy Diet",
        date: "March 15, 2024",
        readTime: "8 min read",
        category: "Nutrition",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop",
        content: `
        <p>Maintaining a heart-healthy diet is one of the most powerful tools we have for preventing cardiovascular disease and supporting overall heart health. As a cardiologist, I've seen firsthand how dietary choices can dramatically impact patient outcomes.</p>

        <h2>The Foundation of Heart-Healthy Eating</h2>
        
        <p>A heart-healthy diet isn't about strict limitations or depriving yourself of foods you love. Rather, it's about feeling great, having more energy, and improving your health. The key is to focus on eating real, whole foods while limiting processed foods that are high in sodium, sugar, and unhealthy fats.</p>

        <h3>Essential Components</h3>

        <p><strong>1. Omega-3 Rich Foods</strong><br>
        Fatty fish like salmon, mackerel, and sardines are excellent sources of omega-3 fatty acids, which help reduce inflammation and lower the risk of heart disease. Aim for at least two servings per week.</p>

        <p><strong>2. Fiber-Rich Vegetables and Fruits</strong><br>
        Vegetables and fruits are packed with vitamins, minerals, and antioxidants that support heart health. The fiber in these foods helps lower cholesterol levels and maintain healthy blood pressure.</p>

        <p><strong>3. Whole Grains</strong><br>
        Choose whole grains over refined grains. Oats, brown rice, quinoa, and whole wheat products provide fiber and nutrients that support cardiovascular health.</p>

        <p><strong>4. Healthy Fats</strong><br>
        Not all fats are created equal. Monounsaturated and polyunsaturated fats from sources like olive oil, avocados, nuts, and seeds can actually improve heart health when used in moderation.</p>

        <h2>Foods to Limit</h2>

        <p>While focusing on what to include in your diet, it's equally important to limit certain foods that can negatively impact heart health:</p>

        <ul>
            <li>Processed and packaged foods high in sodium</li>
            <li>Sugary drinks and excessive added sugars</li>
            <li>Trans fats and excessive saturated fats</li>
            <li>Refined carbohydrates and white flour products</li>
        </ul>

        <h2>Practical Implementation Tips</h2>

        <p><strong>Start Small:</strong> Don't try to overhaul your entire diet overnight. Make gradual changes that you can sustain long-term.</p>

        <p><strong>Meal Planning:</strong> Spend time each week planning your meals. This helps ensure you have heart-healthy options readily available.</p>

        <p><strong>Read Labels:</strong> Become familiar with reading nutrition labels, paying special attention to sodium, added sugars, and types of fats.</p>

        <p><strong>Cook More at Home:</strong> Preparing meals at home gives you complete control over ingredients and cooking methods.</p>

        <h2>Sample Day of Heart-Healthy Eating</h2>

        <p><strong>Breakfast:</strong> Oatmeal topped with berries and a sprinkle of nuts<br>
        <strong>Lunch:</strong> Grilled salmon salad with mixed greens and olive oil dressing<br>
        <strong>Snack:</strong> Apple slices with almond butter<br>
        <strong>Dinner:</strong> Grilled chicken with roasted vegetables and quinoa</p>

        <h2>The Bottom Line</h2>

        <p>Remember, a heart-healthy diet is a lifelong commitment, not a temporary fix. Work with your healthcare provider to develop a nutrition plan that works for your specific needs and health conditions. Small, consistent changes can lead to significant improvements in your cardiovascular health over time.</p>

        <p>If you have questions about implementing a heart-healthy diet or need personalized nutrition guidance, don't hesitate to schedule a consultation. Together, we can develop a plan that supports your heart health goals while fitting into your lifestyle.</p>
    `
    };

    return (
        <div className="pt-24">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 py-4">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Button asChild variant="ghost" className="mb-4">
                        <Link to="/blog" className="flex items-center text-medical-blue hover:text-blue-700">
                            <ChevronLeft className="w-4 h-4 mr-2" />
                            Back to Blog
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-64 md:h-96 overflow-hidden">
                <img
                    src={blogPost.image}
                    alt={blogPost.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="absolute bottom-6 left-6">
                    <span className="bg-medical-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                        {blogPost.category}
                    </span>
                </div>
            </div>

            {/* Article Content */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <header className="mb-12">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        {blogPost.title}
                    </h1>
                    <div className="flex items-center text-gray-600 mb-8">
                        <img
                            src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=100&auto=format&fit=crop"
                            alt="Dr. Olulana"
                            className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                            <p className="font-medium text-gray-900">Dr. Olulana</p>
                            <div className="flex items-center text-sm">
                                <time>{blogPost.date}</time>
                                <span className="mx-2">•</span>
                                <span>{blogPost.readTime}</span>
                            </div>
                        </div>
                    </div>
                </header>

                <div
                    className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />

                {/* Author Bio */}
                <div className="border-t border-gray-200 pt-8 mt-12">
                    <div className="flex items-start space-x-4">
                        <img
                            src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=100&auto=format&fit=crop"
                            alt="Dr. Olulana"
                            className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">About Dr. Olulana</h3>
                            <p className="text-gray-600 mb-4">
                                Board-certified Consultant Cardiologist with over 15 years of experience in
                                preventive cardiology and heart disease management. Dedicated to empowering
                                patients through education and personalized care.
                            </p>
                            <Button asChild className="bg-medical-blue hover:bg-blue-700">
                                <Link to="/about">Learn More About Dr. Olulana</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-medical-lightblue rounded-2xl p-8 mt-12 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Ready to Improve Your Heart Health?
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Schedule a consultation to discuss personalized strategies for your cardiovascular wellness.
                    </p>
                    <Button className="cursor-pointer bg-white/50 hover:bg-white text-black px-8 py-3">
                        Book Consultation
                    </Button>
                </div>
            </article>
        </div>
    );
};

export default BlogPost;