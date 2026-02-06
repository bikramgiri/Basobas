import { MapPin, Star, Check } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";

const hostels = [
    {
        id: 1,
        name: "New Baneshwor Boys Hostel",
        location: "Baneshwor, Near IOE Pulchowk",
        price: 8500,
        type: "Boys Only",
        image: "https://images.unsplash.com/photo-1559329146-807aff9ff1fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwbW9kZXJufGVufDF8fHx8MTc3MDI5NjkxMnww&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.5,
        reviews: 23,
        features: ["WiFi", "Mess", "Hot Water", "Study Room"],
        verified: true,
        available: "2 rooms"
    },
    {
        id: 2,
        name: "Kupondole Ladies Mess",
        location: "Kupondole, 5 min walk to Pulchowk",
        price: 7500,
        type: "Girls Only",
        image: "https://images.unsplash.com/photo-1568723256924-ec521428cfe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwY2l0eSUyMGhvc3RlbHxlbnwxfHx8fDE3NzAzNTcwMzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.7,
        reviews: 18,
        features: ["WiFi", "Mess", "Hot Water", "No Curfew"],
        verified: true,
        available: "1 room"
    },
    {
        id: 3,
        name: "Lazimpat Student Residence",
        location: "Lazimpat, Near TU Gate",
        price: 9000,
        type: "Mixed",
        image: "https://images.unsplash.com/photo-1601062224947-3ca636754fb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXBhbCUyMGthdGhtYW5kdSUyMGJ1aWxkaW5nJTIwaG9zdGVsfGVufDF8fHx8MTc3MDM1NzAzNHww&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.3,
        reviews: 31,
        features: ["WiFi", "Self Cooking", "Hot Water", "Parking"],
        verified: true,
        available: "3 rooms"
    },
    {
        id: 4,
        name: "Thamel Budget Hostel",
        location: "Thamel, Near NCCS College",
        price: 6000,
        type: "Boys Only",
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcm9vbSUyMGhvc3RlbCUyMGJlZHxlbnwxfHx8fDE3NzAzNTcwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.0,
        reviews: 15,
        features: ["WiFi", "Shared Kitchen", "Water 24/7"],
        verified: true,
        available: "4 rooms"
    },
    {
        id: 5,
        name: "Putalisadak Girls Hostel",
        location: "Putalisadak, Near Amrit Campus",
        price: 7800,
        type: "Girls Only",
        image: "https://images.unsplash.com/photo-1767800766055-1cdbd2e351b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdHVkZW50JTIwYmVkcm9vbSUyMGNsZWFufGVufDF8fHx8MTc3MDM1NzA0MXww&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.6,
        reviews: 27,
        features: ["WiFi", "Mess", "Hot Water", "Security"],
        verified: true,
        available: "2 rooms"
    },
    {
        id: 6,
        name: "Lakeside Student Home",
        location: "Pokhara Lakeside, Near Prithvi Campus",
        price: 6500,
        type: "Mixed",
        image: "https://images.unsplash.com/photo-1601062224947-3ca636754fb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXBhbCUyMGthdGhtYW5kdSUyMGJ1aWxkaW5nJTIwaG9zdGVsfGVufDF8fHx8MTc3MDM1NzAzNHww&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.8,
        reviews: 19,
        features: ["WiFi", "Mess", "Lake View", "Bike Parking"],
        verified: true,
        available: "5 rooms"
    }
];

export default function RecentHostels() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Recently Added Hostels
                        </h2>
                        <p className="text-lg text-gray-600">
                            Find verified hostels with real photos and genuine student reviews
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {hostels.map((hostel) => (
                            <div
                                key={hostel.id}
                                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                            >
                                {/* Image */}
                                <div className="relative h-48 bg-gray-200">
                                    <ImageWithFallback
                                        src={hostel.image}
                                        alt={hostel.name}
                                        className="w-full h-full object-cover"
                                    />
                                    {hostel.verified && (
                                        <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                                            <Check className="w-3 h-3" />
                                            Verified
                                        </div>
                                    )}
                                    <div className="absolute bottom-3 left-3 bg-white px-2 py-1 rounded-lg text-xs font-medium text-gray-700">
                                        {hostel.type}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                                        {hostel.name}
                                    </h3>

                                    <div className="flex items-center text-sm text-gray-600 mb-3">
                                        <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                                        <span className="line-clamp-1">{hostel.location}</span>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                            <span className="font-medium text-gray-900">{hostel.rating}</span>
                                        </div>
                                        <span className="text-sm text-gray-500">({hostel.reviews} reviews)</span>
                                    </div>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {hostel.features.map((feature) => (
                                            <span
                                                key={feature}
                                                className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Price and Availability */}
                                    <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                                        <div>
                                            <div className="text-2xl font-bold text-gray-900">
                                                Rs. {hostel.price.toLocaleString()}
                                            </div>
                                            <div className="text-xs text-gray-500">per month</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm font-medium text-green-600">
                                                {hostel.available}
                                            </div>
                                            <div className="text-xs text-gray-500">available</div>
                                        </div>
                                    </div>

                                    <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors cursor-pointer">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium cursor-pointer">
                            View All Hostels
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
