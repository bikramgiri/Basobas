export default function CTASection() {
    return (
        <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to Focus on Your Studies?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                    Join thousands of Nepali students who trust Basobas for their accommodation needs
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all">
                        Get Started Free
                    </button>
                    <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}
