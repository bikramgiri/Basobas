import React from 'react';
import { Star, MapPin, Wifi, Utensils, Zap, BookOpen, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const AmenityIcon = ({ name }) => {
    switch (name) {
        case 'WiFi': return <Wifi className="w-4 h-4" />;
        case 'Mess': return <Utensils className="w-4 h-4" />;
        case 'Hot Water': return <Zap className="w-4 h-4" />;
        case 'Study Room': return <BookOpen className="w-4 h-4" />;
        default: return <BadgeCheck className="w-4 h-4" />;
    }
};

const HostelCard = ({ hostel }) => {
    const {
        id,
        name,
        location,
        price,
        gender,
        rating,
        reviewCount,
        amenities,
        image,
        availableCount,
        verified
    } = hostel;

    return (
        <Link
            to={`/hostel/${id}`}
            state={{ hostel }}
            className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-200 hover:scale-[1.01] cursor-pointer flex flex-col h-full"
        >
            {/* Image Section */}
            <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {verified && (
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-blue-600 flex items-center gap-1 shadow-sm">
                        <BadgeCheck className="w-3 h-3" />
                        Verified
                    </div>
                )}
                <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm shadow-sm ${availableCount > 0
                        ? 'bg-green-100/90 text-green-700'
                        : 'bg-red-100/90 text-red-700'
                        }`}>
                        {availableCount > 0 ? `${availableCount} beds left` : 'Fully Booked'}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-4 flex flex-col flex-1">
                <div className="flex justify-between items-start gap-2 mb-2">
                    <h3 className="font-bold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
                        {name}
                    </h3>
                    <div className="flex items-center gap-1 text-sm font-medium text-gray-900 shrink-0">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        {rating}
                        <span className="text-gray-500 font-normal">({reviewCount})</span>
                    </div>
                </div>

                <div className="flex items-center text-gray-500 text-sm mb-3">
                    <MapPin className="w-4 h-4 mr-1 shrink-0" />
                    <span className="truncate">{location}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                    {amenities && amenities.slice(0, 3).map((amenity, index) => (
                        <div key={index} className="flex items-center gap-1 text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded-md">
                            <AmenityIcon name={amenity} />
                            {amenity}
                        </div>
                    ))}
                    {amenities && amenities.length > 3 && (
                        <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-md">
                            +{amenities.length - 3} more
                        </span>
                    )}
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100 flex items-end justify-between">
                    <div>
                        <p className="text-xs text-gray-500 mb-0.5">{gender}</p>
                        <p className="text-lg font-bold text-blue-600">
                            Rs. {price.toLocaleString()}
                            <span className="text-sm text-gray-500 font-normal">/month</span>
                        </p>
                    </div>
                    <div
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                        View Details
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default HostelCard;
