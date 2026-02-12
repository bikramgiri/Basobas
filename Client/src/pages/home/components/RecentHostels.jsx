import React from "react";
import { Link } from "react-router-dom";
import { hostels } from "../../../data/hostelData";
import HostelCard from "../../../components/HostelCard";

export default function RecentHostels() {
    // Only show the first 6 hostels
    const recentHostels = hostels.slice(0, 6);

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12 flex justify-between">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Recently Added Hostels
                        </h2>

                        <Link to="/explore-hostel" className="px-8 py-3 underline text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium cursor-pointer">
                            View All Hostels
                        </Link>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {recentHostels.map((hostel) => (
                            <HostelCard key={hostel.id} hostel={hostel} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
