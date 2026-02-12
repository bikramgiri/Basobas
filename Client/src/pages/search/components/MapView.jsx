import React from 'react';
import { Map, MapPin } from 'lucide-react';
import { hostels } from '../../../data/hostelData';
import { useNavigate } from 'react-router-dom';

const MapView = () => {
    const navigate = useNavigate();

    // Simple bounding box for Kathmandu Valley (approximate)
    const minLat = 27.65;
    const maxLat = 27.75;
    const minLng = 85.27;
    const maxLng = 85.37;

    return (
        <div className="sticky top-24 h-[calc(100vh-8rem)] rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-blue-50 group">
            {/* Placeholder Map Background */}
            <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/85.3240,27.7000,12,0/800x1000?access_token=PLACEHOLDER')] bg-cover bg-center opacity-70 group-hover:opacity-100 transition-all duration-500">
            </div>

            {/* Abstract Map Grid Pattern (CSS Fallback) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#3B82F6 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }}>
            </div>

            {/* Map Pins */}
            {hostels.map((hostel) => {
                // Calculate relative position percentage
                // Clamp values to keep pins inside the box
                const lat = Math.min(Math.max(hostel.coordinates.lat, minLat), maxLat);
                const lng = Math.min(Math.max(hostel.coordinates.lng, minLng), maxLng);

                const bottomPct = ((lat - minLat) / (maxLat - minLat)) * 100;
                const leftPct = ((lng - minLng) / (maxLng - minLng)) * 100;

                return (
                    <div
                        key={hostel.id}
                        className="absolute group/pin cursor-pointer transform -translate-x-1/2 -translate-y-full hover:z-10"
                        style={{ bottom: `${bottomPct}%`, left: `${leftPct}%` }}
                        onClick={() => navigate(`/hostel/${hostel.id}`, { state: { hostel } })}
                    >
                        <div className="relative">
                            <MapPin className="w-8 h-8 text-red-600 fill-red-100 drop-shadow-lg hover:scale-125 transition-transform" />
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white px-2 py-1 rounded text-xs font-bold shadow-md opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap z-20">
                                {hostel.name}
                            </div>
                        </div>
                    </div>
                );
            })}

            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow text-xs font-medium text-gray-500">
                Interactive Map Mode
            </div>
        </div>
    );
};

export default MapView;
