import { GraduationCap, Wifi, BookOpen, Users, Shield, Clock, Star } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Verified Hostels",
      description:
        "Every hostel is thoroughly verified to ensure safety, quality, and authenticity.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Instant Booking",
      description:
        "Reliable internet for online classes and research work",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Genuine Reviews",
      description:
        "Read real reviews from students to make informed decisions about your stay.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Student Community",
      description:
        "Connect with fellow students and build lasting friendships",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Basobas?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The smartest way to find and book student hostels across Nepal
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="dark:bg-white justify-items-center p-8 rounded-2xl border border-gray-100 hover:border-blue-200

              shadow-[0_-4px_25px_-8px_rgba(0,0,0,0.6),0_3px_20px_-8px_rgba(0,0,0,0.04)]
              dark:shadow-[0_-2px_34px_-14px_rgba(0,0,0,0.2),0_2px_14px_-8px_rgba(0,0,0,0.20)]
  
              hover:shadow-[0_-6px_26px_-6px_rgba(0,0,0,0.6),0_8px_16px_-6px_rgba(0,0,0,0.1)]
              dark:hover:shadow-[0_-8px_36px_-6px_rgba(0,0,0,0.12),0_6px_12px_-2px_rgba(0,0,0,0.14)]
  
              transition-shadow duration-500
              "
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex justify-items-center items-center justify-center text-white mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features
