import React from 'react';
import { Filter, X } from 'lucide-react';

const locations = [
    "Baneshwor", "Kupondole", "Pulchowk", "Thamel", "Lazimpat", "Putalisadak", "Pokhara", "Chitwan"
];

const amenitiesList = [
    { id: 'wifi', label: 'WiFi', icon: 'Wifi' },
    { id: 'mess', label: 'Mess', icon: 'Utensils' },
    { id: 'hotWater', label: 'Hot Water', icon: 'Zap' },
    { id: 'studyRoom', label: 'Study Room', icon: 'BookOpen' }
];

const FilterSidebar = ({ filters, setFilters, maxPrice = 15000, minPrice = 3000 }) => {

    const handleLocationChange = (e) => {
        setFilters(prev => ({ ...prev, location: e.target.value }));
    };

    const handlePriceChange = (e) => {
        setFilters(prev => ({ ...prev, maxPrice: parseInt(e.target.value) }));
    };

    const handleGenderChange = (value) => {
        setFilters(prev => ({ ...prev, gender: value }));
    };

    const handleAmenityChange = (amenityId) => {
        setFilters(prev => {
            const currentAmenities = prev.amenities || [];
            if (currentAmenities.includes(amenityId)) {
                return { ...prev, amenities: currentAmenities.filter(id => id !== amenityId) };
            } else {
                return { ...prev, amenities: [...currentAmenities, amenityId] };
            }
        });
    };

    const clearFilters = () => {
        setFilters({
            location: '',
            maxPrice: 15000,
            gender: '',
            amenities: []
        });
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <Filter className="w-5 h-5" />
                    Filters
                </h2>
                <button
                    onClick={clearFilters}
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                    Reset
                </button>
            </div>

            {/* Location */}
            <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                <select
                    value={filters.location}
                    onChange={handleLocationChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-gray-50 hover:bg-white transition-colors"
                >
                    <option value="">All Locations</option>
                    {locations.map(loc => (
                        <option key={loc} value={loc}>{loc}</option>
                    ))}
                </select>
            </div>

            {/* Price Range */}
            <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                    Price Range
                    <span className="block text-xs font-normal text-gray-500 mt-1">
                        Up to Rs. {filters.maxPrice.toLocaleString()} / month
                    </span>
                </label>
                <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    step={500}
                    value={filters.maxPrice}
                    onChange={handlePriceChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>Rs. {minPrice.toLocaleString()}</span>
                    <span>Rs. {maxPrice.toLocaleString()}</span>
                </div>
            </div>

            {/* Gender */}
            <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Gender</label>
                <div className="flex flex-wrap gap-2">
                    {['Boys Only', 'Girls Only', 'Mixed'].map((g) => (
                        <button
                            key={g}
                            onClick={() => handleGenderChange(g === filters.gender ? '' : g)}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${filters.gender === g
                                    ? 'bg-blue-600 text-white border-blue-600 shadow-md transform scale-105'
                                    : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600'
                                }`}
                        >
                            {g}
                        </button>
                    ))}
                </div>
            </div>

            {/* Amenities */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Amenities</label>
                <div className="space-y-3">
                    {amenitiesList.map((amenity) => (
                        <label key={amenity.id} className="flex items-center gap-3 cursor-pointer group">
                            <div className="relative flex items-center">
                                <input
                                    type="checkbox"
                                    checked={filters.amenities.includes(amenity.label)} // Use label to match mockData
                                    onChange={() => handleAmenityChange(amenity.label)}
                                    className="peer w-5 h-5 border-2 border-gray-300 rounded text-blue-600 focus:ring-blue-500 transition-colors cursor-pointer"
                                />
                                <svg
                                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none opacity-0 peer-checked:opacity-100 text-white transition-opacity"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                >
                                    <path
                                        d="M3 8L6 11L11 3.5"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                                {amenity.label}
                            </span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FilterSidebar;
