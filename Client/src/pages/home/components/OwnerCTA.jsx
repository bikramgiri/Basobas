import { Building2, CheckCircle, TrendingUp, Users } from "lucide-react";

const benefits = [
    {
        icon: Users,
        title: "Reach Thousands of Students",
        description: "Connect with verified students actively searching for hostels"
    },
    {
        icon: CheckCircle,
        title: "Easy Listing Management",
        description: "Simple dashboard to manage bookings, photos, and availability"
    },
    {
        icon: TrendingUp,
        title: "Increase Occupancy",
        description: "Fill vacant rooms faster with our targeted student audience"
    }
];

export default function OwnerCTA() {
    return (
        <section className="py-16 bg-linear-to-br from-blue-600 to-blue-800">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="text-white">
                            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
                                <Building2 className="w-5 h-5" />
                                <span className="font-medium">For Hostel Owners</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                List Your Hostel on Basobas
                            </h2>

                            <p className="text-blue-100 text-lg mb-8">
                                Join hundreds of hostel owners who are successfully connecting with
                                students across Nepal. Get verified, build trust, and grow your business.
                            </p>

                            <div className="space-y-4 mb-8">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="shrink-0">
                                            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                                                <benefit.icon className="w-6 h-6 text-white" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-1">
                                                {benefit.title}
                                            </h3>
                                            <p className="text-blue-100">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors cursor-pointer">
                                    List Your Property
                                </button>
                                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors cursor-pointer">
                                    Learn More
                                </button>
                            </div>
                        </div>

                        {/* Right Stats */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <div className="text-4xl font-bold text-white mb-2">500+</div>
                                <div className="text-blue-100">Listed Hostels</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <div className="text-4xl font-bold text-white mb-2">10K+</div>
                                <div className="text-blue-100">Student Visits</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <div className="text-4xl font-bold text-white mb-2">95%</div>
                                <div className="text-blue-100">Fill Rate</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                                <div className="text-blue-100">Support</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
