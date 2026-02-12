import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import FilterSidebar from './components/FilterSidebar';
import HostelCard from './components/HostelCard';
import MapView from './components/MapView';
import { hostels } from './mockData';
import { SlidersHorizontal } from 'lucide-react';

const parseBudgetToMaxPrice = (budget) => {
    if (!budget) return 15000;

    if (budget.includes('+')) {
        const min = parseInt(budget, 10);
        return Number.isNaN(min) ? 15000 : Math.max(min, 15000);
    }

    const [, max] = budget.split('-');
    const parsedMax = parseInt(max, 10);
    return Number.isNaN(parsedMax) ? 15000 : parsedMax;
};

const normalizeGender = (gender) => {
    if (!gender) return '';

    const lower = gender.toLowerCase();
    if (lower === 'boys') return 'Boys Only';
    if (lower === 'girls') return 'Girls Only';
    if (lower === 'mixed') return 'Mixed';
    return gender;
};

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
    const locationParam = (searchParams.get('location') || '').trim();
    const budgetParam = searchParams.get('budget') || '';
    const genderParam = normalizeGender(searchParams.get('gender') || '');

    // Initial State from URL params or defaults
    const [filters, setFilters] = useState({
        location: locationParam,
        maxPrice: parseBudgetToMaxPrice(budgetParam),
        gender: genderParam,
        amenities: [],
        roomType: ''
    });

    useEffect(() => {
        setFilters((prev) => ({
            ...prev,
            location: locationParam,
            maxPrice: parseBudgetToMaxPrice(budgetParam),
            gender: genderParam
        }));
    }, [locationParam, budgetParam, genderParam]);

    // Filter Logic
    const filteredHostels = useMemo(() => {
        return hostels.filter(hostel => {
            // Location Filter (Partial match)
            if (filters.location && !hostel.location.toLowerCase().includes(filters.location.toLowerCase())) {
                return false;
            }

            // Price Filter
            if (hostel.price > filters.maxPrice) {
                return false;
            }

            // Gender Filter
            // If 'Boys', show 'Boys Only' and 'Mixed'. If 'Girls', show 'Girls Only' and 'Mixed'.
            // Keep it simple as requested: "Gender filter (Boys/Girls/Mixed)" -> Match exact type or compatible?
            // User mock data has "Boys Only", "Girls Only", "Mixed".
            // Let's do exact match if selected, OR logic used in Hero?
            // Let's assumes strict filtering based on the dropdown: "Boys Only" shows "Boys Only".
            if (filters.gender && filters.gender !== 'Any') {
                // If user selects "Boys", usually they want hostels they can stay in.
                // But the filter sidebar has "Boys Only", "Girls Only", "Mixed".
                // If I check "Boys Only", I expect hostels labeled "Boys Only".
                if (hostel.gender !== filters.gender) {
                    // Allow Mixed to show up? 
                    // If I selected "Boys Only", I probably want just that.
                    // If I selected "Mixed", I want Mixed.
                    return false;
                }
            }

            // Amenities Filter (AND logic)
            if (filters.amenities.length > 0) {
                const hasAllAmenities = filters.amenities.every(amenity =>
                    hostel.amenities.includes(amenity)
                );
                if (!hasAllAmenities) return false;
            }

            return true;
        });
    }, [filters]);

    return (
        <div className="min-h-screen bg-gray-50 pt-20"> {/* pt-20 to account for fixed navbar if any, check Layout */}
            <div className="max-w-[1920px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">

                    {/* Left Panel: Content (60%) */}
                    <div className="col-span-1 lg:col-span-3 min-h-screen overflow-y-auto px-4 md:px-6 py-6">

                        {/* Mobile Filter Toggle */}
                        <div className="lg:hidden mb-4">
                            <button
                                onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                                className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm w-full justify-center font-semibold text-gray-700 border border-gray-200"
                            >
                                <SlidersHorizontal className="w-4 h-4" />
                                {isMobileFilterOpen ? 'Hide Filters' : 'Show Filters'}
                            </button>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Filter Sidebar - Desktop: Sticky sidebar, Mobile: Toggleable */}
                            <div className={`md:w-64 shrink-0 ${isMobileFilterOpen ? 'block' : 'hidden'} md:block`}>
                                <FilterSidebar filters={filters} setFilters={setFilters} />
                            </div>

                            {/* Results Grid */}
                            <div className="flex-1">
                                <div className="mb-6">
                                    <h1 className="text-xl font-bold text-gray-900 mb-1">
                                        {filteredHostels.length > 0 ? `${filteredHostels.length} hostels found` : 'No hostels found'}
                                    </h1>
                                    <p className="text-sm text-gray-500">
                                        Book your perfect stay in Nepal
                                    </p>
                                </div>

                                {filteredHostels.length > 0 ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-12">
                                        {filteredHostels.map(hostel => (
                                            <div key={hostel.id} className="h-[400px]">
                                                <HostelCard hostel={hostel} />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-xl border border-gray-200 border-dashed">
                                        <div className="bg-gray-50 p-4 rounded-full mb-4">
                                            <SlidersHorizontal className="w-8 h-8 text-gray-400" />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900">No matches found</h3>
                                        <p className="text-gray-500 max-w-xs mx-auto mt-2">
                                            Try adjusting your filters or price range to see more results.
                                        </p>
                                        <button
                                            onClick={() => setFilters({ location: '', maxPrice: 15000, gender: '', amenities: [], roomType: '' })}
                                            className="mt-6 text-blue-600 font-medium hover:underline"
                                        >
                                            Clear all filters
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Panel: Map (40%) */}
                    <div className="hidden lg:block col-span-2 h-[calc(100vh-64px)] sticky top-16 bg-gray-100 border-l border-gray-200">
                        <div className="p-4 h-full">
                            <MapView />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SearchPage;
