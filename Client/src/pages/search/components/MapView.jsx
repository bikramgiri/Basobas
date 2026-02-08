import React from 'react';
import { Map } from 'lucide-react';

const MapView = () => {
  return (
    <div className="sticky top-24 h-[calc(100vh-8rem)] rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-blue-50 group">
        {/* Placeholder Map Background */}
        <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/85.3240,27.7172,13,0/800x600?access_token=PLACEHOLDER')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500">
        </div>
        
        {/* Abstract Map Grid Pattern (CSS Fallback) */}
        <div className="absolute inset-0 opacity-10" 
             style={{ 
                 backgroundImage: 'radial-gradient(#3B82F6 1px, transparent 1px)', 
                 backgroundSize: '20px 20px' 
             }}>
        </div>

        <div className="absolute inset-0 flex items-center justify-center flex-col gap-4 bg-white/30 backdrop-blur-sm">
            <div className="bg-white p-4 rounded-full shadow-lg text-blue-600 animate-bounce">
                <Map className="w-8 h-8" />
            </div>
            <p className="font-semibold text-gray-700 bg-white/80 px-4 py-2 rounded-lg shadow-sm backdrop-blur-md">
                Interactive Map View Coming Soon
            </p>
        </div>

        {/* Dummy Pins */}
        <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-red-500 rounded-full shadow-lg ring-4 ring-white/50 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-red-500 rounded-full shadow-lg ring-4 ring-white/50 animate-pulse delay-150"></div>
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-red-500 rounded-full shadow-lg ring-4 ring-white/50 animate-pulse delay-300"></div>
    </div>
  );
};

export default MapView;
