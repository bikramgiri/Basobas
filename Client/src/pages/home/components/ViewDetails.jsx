import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import {
    MapPin, Star, Check, Wifi, UtensilsCrossed, Droplet,
    BookOpen, Users, Car, Shield, Clock, Phone, Mail,
    ChevronLeft, ChevronRight, Calendar, Home
} from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';
import { hostels } from '../../../data/hostelData';

export default function ViewDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Get hostel data from location state or from hostels array
    const hostelFromState = location.state?.hostel;
    const hostelFromData = hostels.find(h => h.id === parseInt(id));
    const hostel = hostelFromData || hostelFromState;
    const images = hostel?.images?.length
        ? hostel.images
        : (hostel?.image ? [hostel.image] : []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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

    const features = hostel.featuresDetails || [];

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
                                    {hostel.gender}
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
                                            className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex
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
                                        className={`relative h-20 rounded-lg overflow-hidden ${index === currentImageIndex
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
                                <span className="text-gray-500">({hostel.reviewCount} reviews)</span>
                                <div className="ml-auto">
                                    <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-50 text-green-700 rounded-lg font-medium">
                                        <Calendar className="w-4 h-4" />
                                        {hostel.availableCount} beds left
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
                                    {features.map((feature, index) => {
                                        const iconMap = {
                                            Wifi, UtensilsCrossed, Droplet, BookOpen, Shield, Car,
                                            Clock, Users, MapPin, Home
                                        };
                                        const Icon = iconMap[feature.iconName] || Check;

                                        return (
                                            <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                                                {Icon && <Icon className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />}
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
                            {hostel.nearbyPlaces && (
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
                            )}

                            {/* Rules */}
                            {hostel.rules && (
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
                            )}
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
                                        <div className="font-medium text-gray-900">{hostel.ownerName || 'Hostel Owner'}</div>
                                    </div>

                                    <div>
                                        <div className="text-sm text-gray-500 mb-1">Phone</div>
                                        <a
                                            href={`tel:${hostel.ownerPhone}`}
                                            className="flex items-center gap-2 font-medium text-blue-600 hover:text-blue-700"
                                        >
                                            <Phone className="w-4 h-4" />
                                            {hostel.ownerPhone || 'N/A'}
                                        </a>
                                    </div>

                                    <div>
                                        <div className="text-sm text-gray-500 mb-1">Email</div>
                                        <a
                                            href={`mailto:${hostel.ownerEmail}`}
                                            className="flex items-center gap-2 font-medium text-blue-600 hover:text-blue-700 break-all"
                                        >
                                            <Mail className="w-4 h-4 shrink-0" />
                                            {hostel.ownerEmail || 'N/A'}
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
                                        <span className="font-medium text-gray-900">{hostel.gender}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Available</span>
                                        <span className="font-medium text-green-600">{hostel.availableCount} beds</span>
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
