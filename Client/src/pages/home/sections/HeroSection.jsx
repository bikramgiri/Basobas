import { useState } from "react";
import { Search, MapPin, Calendar, Users } from "lucide-react";

export default function HeroSection() {
    const [searchData, setSearchData] = useState({
        destination: "",
        checkIn: "",
        checkOut: "",
        guests: "1",
    });

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching with:", searchData);
    };

    return (
        <section className="relative pt-24 pb-20 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 opacity-60"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="inline-block bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm">
                            🎓 Your Academic Home Away From Home
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                            Find Your Perfect{" "}
                            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Student Hostel
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600">
                            Book affordable student hostels near top universities in Nepal. Study-friendly
                            spaces, high-speed WiFi, and a vibrant student community.
                        </p>

                        {/* Search Form */}
                        <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-xl p-6 space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-600 flex items-center gap-2">
                                        <MapPin className="w-4 h-4" />
                                        University / City
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="e.g., Tribhuvan University, Kathmandu"
                                        value={searchData.destination}
                                        onChange={(e) =>
                                            setSearchData({ ...searchData, destination: e.target.value })
                                        }
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-600 flex items-center gap-2">
                                        <Users className="w-4 h-4" />
                                        Room Type
                                    </label>
                                    <select
                                        value={searchData.guests}
                                        onChange={(e) => setSearchData({ ...searchData, guests: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="1">Single Room</option>
                                        <option value="2">Shared Room (2 beds)</option>
                                        <option value="3">Dormitory (4+ beds)</option>
                                        <option value="4">Private Suite</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-600 flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        Move-In Date
                                    </label>
                                    <input
                                        type="date"
                                        value={searchData.checkIn}
                                        onChange={(e) => setSearchData({ ...searchData, checkIn: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-600 flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        Move-Out Date
                                    </label>
                                    <input
                                        type="date"
                                        value={searchData.checkOut}
                                        onChange={(e) => setSearchData({ ...searchData, checkOut: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2"
                            >
                                <Search className="w-5 h-5" />
                                Search Hostels
                            </button>
                        </form>
                    </div>

                    <div className="relative hidden lg:block">
                        <div className="absolute -top-10 -right-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-30"></div>
                        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-30"></div>
                        <img
                            src="https://images.unsplash.com/photo-1722912010170-704c382ca530?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBc2lhbiUyMHN0dWRlbnRzJTIwZ3JvdXAlMjBzdHVkeWluZ3xlbnwxfHx8fDE3Njk0ODIyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                            alt="Students studying together"
                            className="relative rounded-3xl shadow-2xl w-full h-150 object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
