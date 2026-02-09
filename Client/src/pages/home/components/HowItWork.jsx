const  HowItWork = ()=>{
  const steps = [
    {
      step: "01",
      title: "Search & Filter",
      description:
        "Browse hostels by location, name, price, and preferences.",
    },
    {
      step: "02",
      title: "Compare & Apply",
      description:
        "Compare options side-by-side and submit your application instantly.",
    },
    {
      step: "03",
      title: "Move In",
      description:
        "Get approved, complete payment, and move into your new home!",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Book your perfect hostel in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="text-center relative">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500 text-white text-2xl font-bold rounded-full mb-6">
                {item.step}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
              {index < 2 && ( 
                <div className="hidden md:block absolute top-10 left-[60%] w-[88%] h-0.5 bg-blue-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWork
