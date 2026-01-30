import { Wifi, BookOpen, Users, GraduationCap } from "lucide-react";

// Mock data for features - will be replaced with server data later
const features = [
    {
        icon: GraduationCap,
        title: "Student Verified",
        description: "All hostels are verified and reviewed by fellow students",
    },
    {
        icon: Wifi,
        title: "High-Speed WiFi",
        description: "Reliable internet for online classes and research work",
    },
    {
        icon: BookOpen,
        title: "Study-Friendly",
        description: "Quiet study areas and 24/7 library access included",
    },
    {
        icon: Users,
        title: "Student Community",
        description: "Connect with fellow students and build lasting friendships",
    },
];

export default function FeaturesSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Basobas?</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        The smartest way to find and book student hostels across Nepal
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl hover:shadow-xl transition-all border border-gray-100 hover:border-blue-200"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-4">
                                    <IconComponent className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
