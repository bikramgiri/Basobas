import { Link } from 'react-router-dom';
import { Search, MapPin, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen">
     <section className="py-14 lative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1698316822420-bb3b3c1eb29b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXRobWFuZHUlMjBjaXR5JTIwc2t5bGluZXxlbnwxfHx8fDE3Njk2NzE5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Find Your Perfect <span className="text-yellow-300">Hostel</span> in Nepal
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Discover verified, safe, and affordable hostels for students across Nepal
            </p>
            
            {/* Search Bar */}
            <div className="mt-8 bg-white rounded-2xl p-2 shadow-2xl max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex-1 flex items-center gap-2 px-3 py-3 bg-gray-50 rounded-xl">
                  <MapPin className="size-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Location (e.g., Kathmandu, Pokhara)"
                    className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-500"
                  />
                </div>
                <div className="flex-1 flex items-center gap-2 px-1 py-3 bg-gray-50 rounded-xl">
                  <Search className="size-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search hostels..."
                    className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-500"
                  />
                </div>
                <Link
                  to="/browse"
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
                >
                  Search
                  <ArrowRight className="size-5" />
                </Link>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-blue-100">Verified Hostels</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-blue-100">Happy Students</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-blue-100">Cities</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold">4.8★</div>
                <div className="text-blue-100">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;