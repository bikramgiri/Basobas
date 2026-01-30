// How it works steps - will be replaced with server data later
const steps = [
    {
        step: "01",
        title: "Search",
        description: "Enter your university and semester dates to find available hostels",
    },
    {
        step: "02",
        title: "Compare",
        description: "Browse verified student hostels, read reviews, and compare amenities",
    },
    {
        step: "03",
        title: "Book",
        description: "Reserve your room with flexible payment plans for students",
    },
];

export default function HowItWorksSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Book your perfect student hostel in three simple steps
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((item, index) => (
                        <div key={index} className="text-center relative">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 text-white text-2xl font-bold rounded-full mb-6">
                                {item.step}
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                            {index < 2 && (
                                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-300 to-purple-300"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
