import { Star, Quote } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";

const testimonials = [
    {
        id: 1,
        name: "Priya Sharma",
        college: "IOE Pulchowk Campus",
        image: "https://images.unsplash.com/photo-1552900651-b2a53060a085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFzaWFuJTIwd29tYW4lMjBzdHVkZW50fGVufDF8fHx8MTc3MDM1NzA0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 5,
        text: "Found my hostel in Kupondole through Basobas. The mess food is amazing and water timing is regular - 6 AM to 9 AM and 5 PM to 10 PM. WiFi works great for online classes. Highly recommend!"
    },
    {
        id: 2,
        name: "Rohan Thapa",
        college: "Tribhuvan University",
        image: "https://images.unsplash.com/photo-1725473824377-b1a507db7afc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHN0dWRlbnQlMjBoYXBweSUyMHNtaWxpbmd8ZW58MXx8fHwxNzcwMzU3MDM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 5,
        text: "Basobas made my hostel search so easy. I found a place in Baneshwor just 10 minutes from my college. The hostel owner is friendly, no strict curfew, and rent is affordable at Rs. 7,500. Perfect for students!"
    },
    {
        id: 3,
        name: "Anita Gurung",
        college: "Kathmandu Medical College",
        image: "https://images.unsplash.com/photo-1761125136417-c5071381d010?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXBhbCUyMGNvbGxlZ2UlMjBzdHVkZW50fGVufDF8fHx8MTc3MDM1NzAzNXww&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4,
        text: "Really helpful platform! All the details were accurate - photos matched reality. My hostel in Lazimpat has study room facility which is great during exam season. Only complaint is hot water is limited to mornings."
    },
    {
        id: 4,
        name: "Sujan Maharjan",
        college: "Pokhara University",
        image: "https://images.unsplash.com/photo-1725473824377-b1a507db7afc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHN0dWRlbnQlMjBoYXBweSUyMHNtaWxpbmd8ZW58MXx8fHwxNzcwMzU3MDM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 5,
        text: "Best decision to use Basobas! My hostel near Lakeside has amazing mountain views. The mess serves both veg and non-veg dal bhat. WiFi speed is good enough for assignments and YouTube."
    },
    {
        id: 5,
        name: "Sita Rai",
        college: "Amrit Science Campus",
        image: "https://images.unsplash.com/photo-1552900651-b2a53060a085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFzaWFuJTIwd29tYW4lMjBzdHVkZW50fGVufDF8fHx8MTc3MDM1NzA0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 5,
        text: "Verified reviews really helped me choose. My hostel in Putalisadak is safe, clean, and the owner aunty is like family. Curfew is 9 PM but flexible during exams. Worth every rupee!"
    },
    {
        id: 6,
        name: "Bikash Shrestha",
        college: "NCCS College",
        image: "https://images.unsplash.com/photo-1725473824377-b1a507db7afc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHN0dWRlbnQlMjBoYXBweSUyMHNtaWxpbmd8ZW58MXx8fHwxNzcwMzU3MDM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4,
        text: "Found a budget-friendly hostel in Thamel through this site. Rs. 6,000 only! Shared kitchen facility is great. Sometimes water supply is irregular but overall good value for money."
    }
];

export default function Testimonials() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            What Students Say
                        </h2>
                        <p className="text-lg text-gray-600">
                            Real reviews from students who found their perfect hostel through Basobas
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                            >
                                {/* Quote Icon */}
                                <div className="mb-4">
                                    <Quote className="w-8 h-8 text-blue-600 opacity-50" />
                                </div>

                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 ${i < testimonial.rating
                                                    ? "fill-yellow-400 text-yellow-400"
                                                    : "fill-gray-200 text-gray-200"
                                                }`}
                                        />
                                    ))}
                                </div>

                                {/* Review Text */}
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    {testimonial.text}
                                </p>

                                {/* Student Info */}
                                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 shrink-0">
                                        <ImageWithFallback
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            {testimonial.college}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
