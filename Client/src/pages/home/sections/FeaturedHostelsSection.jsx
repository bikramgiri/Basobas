import { MapPin, Star } from "lucide-react";

// Mock data for featured hostels - will be replaced with server data later
const featuredHostels = [
    {
        id: 1,
        name: "Tribhuvan Campus Hostel",
        location: "Kirtipur, Kathmandu",
        price: 3500,
        rating: 4.8,
        reviews: 342,
        image:
            "https://images.unsplash.com/photo-1674162406360-df5ec5eb97e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3N0ZWwlMjByb29tJTIwZGVzayUyMHN0dWR5fGVufDF8fHx8MTc2OTQ4MjIyNnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        id: 2,
        name: "Pulchowk Student Residence",
        location: "Pulchowk, Lalitpur",
        price: 4200,
        rating: 4.9,
        reviews: 567,
        image:
            "https://images.unsplash.com/photo-1637455587265-2a3c2cbbcc84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGlicmFyeSUyMHN0dWR5JTIwc3BhY2V8ZW58MXx8fHwxNzY5NDgyMDUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        id: 3,
        name: "Pokhara University Hostel",
        location: "Lekhnath, Pokhara",
        price: 3000,
        rating: 4.7,
        reviews: 289,
        image:
            "https://images.unsplash.com/photo-1686950110097-750b8426e83d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXBhbCUyMFBva2hhcmElMjBjaXR5JTIwdmlld3xlbnwxfHx8fDE3Njk0ODIyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        id: 4,
        name: "Kathmandu University Residence",
        location: "Dhulikhel, Kavre",
        price: 3800,
        rating: 4.6,
        reviews: 421,
        image:
            "https://images.unsplash.com/photo-1585663133660-a423bf052996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXBhbCUyMEthdGhtYW5kdSUyMGNpdHklMjBidWlsZGluZ3N8ZW58MXx8fHwxNzY5NDgyMjI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
];

export default function FeaturedHostelsSection() {
    return (
        <section className="py-20 bg-linear-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-2">Featured Student Hostels</h2>
                        <p className="text-xl text-gray-600">Top-rated hostels loved by students</p>
                    </div>
                    <button className="text-blue-600 font-semibold hover:text-purple-600 transition-colors">
                        View All →
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredHostels.map((hostel) => (
                        <div
                            key={hostel.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
                        >
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={hostel.image}
                                    alt={hostel.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    <span className="text-sm font-semibold">{hostel.rating}</span>
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="font-semibold text-lg text-gray-900 mb-1">{hostel.name}</h3>
                                <p className="text-gray-600 text-sm mb-3 flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    {hostel.location}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="text-2xl font-bold text-gray-900">
                                            NPR {hostel.price.toLocaleString()}
                                        </span>
                                        <span className="text-gray-600 text-sm">/month</span>
                                    </div>
                                    <span className="text-sm text-gray-500">{hostel.reviews} reviews</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
