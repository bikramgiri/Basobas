import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import {
    MapPin, Star, Check, Wifi, UtensilsCrossed, Droplet,
    BookOpen, Users, Car, Shield, Clock, Phone, Mail,
    ChevronLeft, ChevronRight, Calendar, Home
} from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

// Extended hostel data with additional details
const hostelsData = [
    {
        id: 1,
        name: "New Baneshwor Boys Hostel",
        location: "Baneshwor, Near IOE Pulchowk",
        price: 8500,
        type: "Boys Only",
        rating: 4.5,
        reviews: 23,
        verified: true,
        available: "2 rooms",
        description: "A comfortable and well-maintained hostel perfect for engineering students. Located in the heart of Baneshwor with easy access to IOE Pulchowk campus.",
        features: [
            { icon: Wifi, name: "High-Speed WiFi", detail: "100 Mbps" },
            { icon: UtensilsCrossed, name: "Mess Facility", detail: "3 meals/day" },
            { icon: Droplet, name: "Hot Water", detail: "24/7 available" },
            { icon: BookOpen, name: "Study Room", detail: "AC equipped" },
            { icon: Shield, name: "Security", detail: "24/7 CCTV" },
            { icon: Car, name: "Parking", detail: "Bike parking" },
        ],
        images: [
            "https://images.unsplash.com/photo-1559329146-807aff9ff1fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwbW9kZXJufGVufDF8fHx8MTc3MDI5NjkxMnww&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1540518614846-7eded433c457?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        ],
        ownerName: "Ram Prasad Sharma",
        ownerPhone: "+977-9841234567",
        ownerEmail: "ramsharma@example.com",
        rules: [
            "No smoking inside premises",
            "Visitors allowed till 8 PM",
            "Quiet hours: 10 PM - 6 AM",
            "Monthly payment in advance"
        ],
        nearbyPlaces: [
            "IOE Pulchowk - 5 min walk",
            "Shopping Mall - 10 min walk",
            "Hospital - 15 min walk"
        ]
    },
    {
        id: 2,
        name: "Kupondole Ladies Mess",
        location: "Kupondole, 5 min walk to Pulchowk",
        price: 7500,
        type: "Girls Only",
        rating: 4.7,
        reviews: 18,
        verified: true,
        available: "1 room",
        description: "Safe and secure accommodation for female students with homely atmosphere. Strict security measures and quality food services.",
        features: [
            { icon: Wifi, name: "WiFi", detail: "High-speed" },
            { icon: UtensilsCrossed, name: "Mess", detail: "Home-style food" },
            { icon: Droplet, name: "Hot Water", detail: "Always available" },
            { icon: Clock, name: "No Curfew", detail: "Flexible timing" },
            { icon: Shield, name: "24/7 Security", detail: "Female guard" },
            { icon: BookOpen, name: "Study Area", detail: "Quiet zone" },
        ],
        images: [
            "https://images.unsplash.com/photo-1568723256924-ec521428cfe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1767800766055-1cdbd2e351b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        ],
        ownerName: "Sita Devi Shrestha",
        ownerPhone: "+977-9841234568",
        ownerEmail: "sitashrestha@example.com",
        rules: [
            "No male visitors",
            "Guests must register at reception",
            "Quiet hours: 9 PM - 6 AM",
            "Weekly room inspection"
        ],
        nearbyPlaces: [
            "Pulchowk Campus - 5 min walk",
            "Grocery Store - 3 min walk",
            "Bus Stop - 2 min walk"
        ]
    },
    {
        id: 3,
        name: "Lazimpat Student Residence",
        location: "Lazimpat, Near TU Gate",
        price: 9000,
        type: "Mixed",
        rating: 4.3,
        reviews: 31,
        verified: true,
        available: "3 rooms",
        description: "Modern student residence with separate wings for boys and girls. Perfect for TU students with all modern amenities.",
        features: [
            { icon: Wifi, name: "WiFi", detail: "Fiber optic" },
            { icon: UtensilsCrossed, name: "Self Cooking", detail: "Common kitchen" },
            { icon: Droplet, name: "Hot Water", detail: "Solar + Electric" },
            { icon: Car, name: "Parking", detail: "Car & Bike" },
            { icon: Shield, name: "Security", detail: "Gated community" },
            { icon: Users, name: "Common Area", detail: "Recreation room" },
        ],
        images: [
            "https://images.unsplash.com/photo-1601062224947-3ca636754fb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        ],
        ownerName: "Dinesh Kumar Rai",
        ownerPhone: "+977-9841234569",
        ownerEmail: "dineshrai@example.com",
        rules: [
            "Inter-wing visits not allowed after 7 PM",
            "Rent due by 5th of every month",
            "One month advance deposit",
            "Minimum 3 months commitment"
        ],
        nearbyPlaces: [
            "TU Gate - 2 min walk",
            "Restaurants - 5 min walk",
            "Pharmacy - 7 min walk"
        ]
    },
    {
        id: 4,
        name: "Thamel Budget Hostel",
        location: "Thamel, Near NCCS College",
        price: 6000,
        type: "Boys Only",
        rating: 4.0,
        reviews: 15,
        verified: true,
        available: "4 rooms",
        description: "Affordable accommodation in the heart of Thamel. Basic amenities with friendly environment for budget-conscious students.",
        features: [
            { icon: Wifi, name: "WiFi", detail: "Basic speed" },
            { icon: UtensilsCrossed, name: "Shared Kitchen", detail: "Gas & utensils" },
            { icon: Droplet, name: "Water 24/7", detail: "Tank backup" },
            { icon: Home, name: "Furnished", detail: "Bed & wardrobe" },
            { icon: Shield, name: "Security", detail: "Guard on duty" },
            { icon: Users, name: "Common Area", detail: "TV lounge" },
        ],
        images: [
            "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1631049035182-249067d7618e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1616594266886-0d14f7be3103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1556909114-44e3e70034e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        ],
        ownerName: "Prakash Tamang",
        ownerPhone: "+977-9841234570",
        ownerEmail: "prakashtamang@example.com",
        rules: [
            "No parties or loud music",
            "Clean your own room",
            "Visitors till 6 PM only",
            "Share electricity bill equally"
        ],
        nearbyPlaces: [
            "NCCS College - 3 min walk",
            "Thamel Market - 8 min walk",
            "ATM - 2 min walk"
        ]
    },
    {
        id: 5,
        name: "Putalisadak Girls Hostel",
        location: "Putalisadak, Near Amrit Campus",
        price: 7800,
        type: "Girls Only",
        rating: 4.6,
        reviews: 27,
        verified: true,
        available: "2 rooms",
        description: "Premium girls hostel with excellent facilities and strict security. Perfect for serious students looking for a peaceful environment.",
        features: [
            { icon: Wifi, name: "WiFi", detail: "Premium speed" },
            { icon: UtensilsCrossed, name: "Mess", detail: "Nutritious meals" },
            { icon: Droplet, name: "Hot Water", detail: "Geyser in rooms" },
            { icon: Shield, name: "Security", detail: "Biometric entry" },
            { icon: BookOpen, name: "Library", detail: "Study materials" },
            { icon: Users, name: "Common Room", detail: "Entertainment" },
        ],
        images: [
            "https://images.unsplash.com/photo-1767800766055-1cdbd2e351b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1616594266886-0d14f7be3103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1540518614846-7eded433c457?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        ],
        ownerName: "Maya Gurung",
        ownerPhone: "+977-9841234571",
        ownerEmail: "mayagurung@example.com",
        rules: [
            "Study hours: 7 PM - 9 PM (silent)",
            "No outside food delivery after 8 PM",
            "Monthly room cleanliness inspection",
            "Two months deposit required"
        ],
        nearbyPlaces: [
            "Amrit Campus - 3 min walk",
            "Library - 5 min walk",
            "Medical Store - 4 min walk"
        ]
    },
    {
        id: 6,
        name: "Lakeside Student Home",
        location: "Pokhara Lakeside, Near Prithvi Campus",
        price: 6500,
        type: "Mixed",
        rating: 4.8,
        reviews: 19,
        verified: true,
        available: "5 rooms",
        description: "Beautiful lakeside accommodation with stunning views. Perfect blend of peaceful study environment and natural beauty.",
        features: [
            { icon: Wifi, name: "WiFi", detail: "High-speed fiber" },
            { icon: UtensilsCrossed, name: "Mess", detail: "Local cuisine" },
            { icon: MapPin, name: "Lake View", detail: "Mountain view" },
            { icon: Car, name: "Bike Parking", detail: "Covered area" },
            { icon: Shield, name: "Security", detail: "24/7 guard" },
            { icon: Users, name: "Terrace", detail: "Common space" },
        ],
        images: [
            "https://images.unsplash.com/photo-1601062224947-3ca636754fb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        ],
        ownerName: "Binod Pokharel",
        ownerPhone: "+977-9841234572",
        ownerEmail: "binodpokharel@example.com",
        rules: [
            "Respect quiet hours",
            "Keep common areas clean",
            "Inform before bringing guests",
            "No pets allowed"
        ],
        nearbyPlaces: [
            "Prithvi Campus - 5 min walk",
            "Lakeside Market - 10 min walk",
            "Boat Station - 7 min walk"
        ]
    }
];

export default function ViewDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Get hostel data from location state or from hostelsData array
    const hostelFromState = location.state?.hostel;
    const hostelFromData = hostelsData.find(h => h.id === parseInt(id));
    const hostel = hostelFromData || hostelFromState;
    const images = hostel?.images?.length
        ? hostel.images
        : (hostel?.image ? [hostel.image] : []);

    // Auto-rotate images every 3 seconds
    useEffect(() => {
        if (!hostel || images.length === 0) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [hostel, images.length]);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    if (!hostel) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Hostel not found</h2>
                    <button
                        onClick={() => navigate('/')}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Go Back Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 font-medium"
                >
                    <ChevronLeft className="w-5 h-5" />
                    Back to Listings
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Image Carousel */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-md">
                            <div className="relative h-96 bg-gray-200">
                                <ImageWithFallback
                                    src={images[currentImageIndex]}
                                    alt={`${hostel.name} - Image ${currentImageIndex + 1}`}
                                    className="w-full h-full object-cover"
                                />

                                {/* Verified Badge */}
                                {hostel.verified && (
                                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5">
                                        <Check className="w-4 h-4" />
                                        Verified
                                    </div>
                                )}

                                {/* Type Badge */}
                                <div className="absolute top-4 left-4 bg-white px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700">
                                    {hostel.type}
                                </div>

                                {/* Navigation Buttons */}
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                                >
                                    <ChevronLeft className="w-6 h-6 text-gray-700" />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                                >
                                    <ChevronRight className="w-6 h-6 text-gray-700" />
                                </button>

                                {/* Image Indicators */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                    {images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`w-2 h-2 rounded-full transition-all ${
                                                index === currentImageIndex
                                                    ? 'bg-white w-6'
                                                    : 'bg-white/50 hover:bg-white/75'
                                            }`}
                                        />
                                    ))}
                                </div>

                                {/* Image Counter */}
                                <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                                    {currentImageIndex + 1} / {images.length}
                                </div>
                            </div>

                            {/* Thumbnail Strip */}
                            <div className="grid grid-cols-5 gap-2 p-4 bg-gray-100">
                                {images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`relative h-20 rounded-lg overflow-hidden ${
                                            index === currentImageIndex
                                                ? 'ring-2 ring-blue-600'
                                                : 'opacity-60 hover:opacity-100'
                                        } transition-all`}
                                    >
                                        <ImageWithFallback
                                            src={image}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Hostel Details */}
                        <div className="bg-white rounded-xl p-6 shadow-md">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                        {hostel.name}
                                    </h1>
                                    <div className="flex items-center text-gray-600 mb-3">
                                        <MapPin className="w-5 h-5 mr-2 shrink-0" />
                                        <span>{hostel.location}</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-3xl font-bold text-blue-600">
                                        Rs. {hostel.price.toLocaleString()}
                                    </div>
                                    <div className="text-sm text-gray-500">per month</div>
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
                                <div className="flex items-center gap-2">
                                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    <span className="text-xl font-semibold text-gray-900">{hostel.rating}</span>
                                </div>
                                <span className="text-gray-500">({hostel.reviews} reviews)</span>
                                <div className="ml-auto">
                                    <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-50 text-green-700 rounded-lg font-medium">
                                        <Calendar className="w-4 h-4" />
                                        {hostel.available} available
                                    </span>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="py-6 border-b border-gray-200">
                                <h2 className="text-xl font-semibold text-gray-900 mb-3">About</h2>
                                <p className="text-gray-600 leading-relaxed">{hostel.description}</p>
                            </div>

                            {/* Features */}
                            <div className="py-6 border-b border-gray-200">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Features & Amenities</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {hostel.features.map((feature, index) => {
                                        const Icon = feature.icon;
                                        return (
                                            <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                                                <Icon className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                                                <div>
                                                    <div className="font-medium text-gray-900">{feature.name}</div>
                                                    <div className="text-sm text-gray-600">{feature.detail}</div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Nearby Places */}
                            <div className="py-6 border-b border-gray-200">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Nearby Places</h2>
                                <div className="space-y-2">
                                    {hostel.nearbyPlaces.map((place, index) => (
                                        <div key={index} className="flex items-center gap-2 text-gray-600">
                                            <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                                            <span>{place}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Rules */}
                            <div className="pt-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">House Rules</h2>
                                <div className="space-y-2">
                                    {hostel.rules.map((rule, index) => (
                                        <div key={index} className="flex items-start gap-2 text-gray-600">
                                            <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                            <span>{rule}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8 space-y-6">
                            {/* Contact Card */}
                            <div className="bg-white rounded-xl p-6 shadow-md">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Owner</h3>

                                <div className="space-y-4 mb-6">
                                    <div>
                                        <div className="text-sm text-gray-500 mb-1">Name</div>
                                        <div className="font-medium text-gray-900">{hostel.ownerName}</div>
                                    </div>

                                    <div>
                                        <div className="text-sm text-gray-500 mb-1">Phone</div>
                                        <a
                                            href={`tel:${hostel.ownerPhone}`}
                                            className="flex items-center gap-2 font-medium text-blue-600 hover:text-blue-700"
                                        >
                                            <Phone className="w-4 h-4" />
                                            {hostel.ownerPhone}
                                        </a>
                                    </div>

                                    <div>
                                        <div className="text-sm text-gray-500 mb-1">Email</div>
                                        <a
                                            href={`mailto:${hostel.ownerEmail}`}
                                            className="flex items-center gap-2 font-medium text-blue-600 hover:text-blue-700 break-all"
                                        >
                                            <Mail className="w-4 h-4 shrink-0" />
                                            {hostel.ownerEmail}
                                        </a>
                                    </div>
                                </div>

                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors font-medium flex items-center justify-center gap-2">
                                    <Phone className="w-5 h-5" />
                                    Call Now
                                </button>

                                <button className="w-full mt-3 bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 rounded-lg transition-colors font-medium flex items-center justify-center gap-2">
                                    <Mail className="w-5 h-5" />
                                    Send Message
                                </button>
                            </div>

                            {/* Quick Info Card */}
                            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                                <h3 className="font-semibold text-gray-900 mb-4">Quick Info</h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Type</span>
                                        <span className="font-medium text-gray-900">{hostel.type}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Available</span>
                                        <span className="font-medium text-green-600">{hostel.available}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Rating</span>
                                        <span className="font-medium text-gray-900">{hostel.rating}/5</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Status</span>
                                        <span className="font-medium text-green-600">
                                            {hostel.verified ? 'Verified' : 'Unverified'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Safety Tips */}
                            <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-100">
                                <div className="flex items-center gap-2 mb-3">
                                    <Shield className="w-5 h-5 text-yellow-600" />
                                    <h3 className="font-semibold text-gray-900">Safety Tips</h3>
                                </div>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Visit the hostel in person before booking</li>
                                    <li>• Verify all amenities mentioned</li>
                                    <li>• Read the agreement carefully</li>
                                    <li>• Check security measures</li>
                                    <li>• Get receipt for any payments</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
