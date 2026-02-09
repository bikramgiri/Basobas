import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, Users } from "lucide-react";

export default function HeroSection() {
    const navigate = useNavigate();
    const [location, setLocation] = useState("");
    const [budget, setBudget] = useState("");
    const [gender, setGender] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        const params = new URLSearchParams();
        if (location) params.append('location', location);
        if (gender) params.append('gender', gender);
        navigate(`/explore-hostel?${params.toString()}`);
    };

    return (
        <div className="relative bg-linear-to-br from-blue-50 via-white to-orange-50">
            {/* Hero Content */}
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Find Your <span className="text-blue-600">Perfect Hostel</span> in Nepal
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-12">
                        Search verified hostels near your college in Kathmandu, Pokhara, and across Nepal.
                        Compare prices, read reviews from real students.
                    </p>

                    {/* Search Form */}
                    <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            {/* Location */}
                            <div className="relative">
                                <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                                    Location
                                </label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <select
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
                                    >
                                        <option value="">Select location</option>
                                        <option value="baneshwor">Baneshwor</option>
                                        <option value="kupondole">Kupondole</option>
                                        <option value="pulchowk">Pulchowk</option>
                                        <option value="thamel">Thamel</option>
                                        <option value="lazimpat">Lazimpat</option>
                                        <option value="putalisadak">Putalisadak</option>
                                        <option value="pokhara">Pokhara</option>
                                        <option value="chitwan">Chitwan</option>
                                    </select>
                                </div>
                            </div>

                            {/* Budget */}
                            <div className="relative">
                                <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                                    Budget (Monthly)
                                </label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                                        Rs.
                                    </span>
                                    <select
                                        value={budget}
                                        onChange={(e) => setBudget(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
                                    >
                                        <option value="">Any budget</option>
                                        <option value="5000-7000">5,000 - 7,000</option>
                                        <option value="7000-9000">7,000 - 9,000</option>
                                        <option value="9000-12000">9,000 - 12,000</option>
                                        <option value="12000+">12,000+</option>
                                    </select>
                                </div>
                            </div>

                            {/* Gender */}
                            <div className="relative">
                                <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                                    Preference
                                </label>
                                <div className="relative">
                                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <select
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
                                    >
                                        <option value="">Any</option>
                                        <option value="boys">Boys Only</option>
                                        <option value="girls">Girls Only</option>
                                        <option value="mixed">Mixed</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
                        >
                            <Search className="w-5 h-5" />
                            <span className="font-medium">Search Hostels</span>
                        </button>
                    </form>

                    {/* Quick Stats */}
                    <div className="mt-12 grid grid-cols-3 gap-8 max-w-xl mx-auto">
                        <div>
                            <div className="text-3xl font-bold text-blue-600">500+</div>
                            <div className="text-sm text-gray-600 mt-1">Verified Hostels</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-blue-600">10K+</div>
                            <div className="text-sm text-gray-600 mt-1">Happy Students</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-blue-600">3</div>
                            <div className="text-sm text-gray-600 mt-1">Major Cities</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
