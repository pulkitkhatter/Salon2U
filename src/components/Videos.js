import React from "react";

const Testimonials = () => {
  // Define the testimonials data
  const testimonialsData = [
    { text: "I was amazed by the quality of service provided by this company. Highly recommended!", name: "John Doe" },
    { text: "The team went above and beyond to meet our requirements. Great job!", name: "Jane Smith" },
    { text: "Outstanding service! I'm very satisfied with the results.", name: "Alex Johnson" },
    { text: "Excellent communication and professionalism. Would definitely work with them again!", name: "Emily Brown" }
  ];

  // Function to generate star icons based on rating
  const generateStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i} className="text-yellow-500">&#9733;</span>);
      } else {
        stars.push(<span key={i} className="text-gray-300">&#9733;</span>);
      }
    }
    return stars;
  };

  return (
    <section className="my-8 px-4 relative">
      
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <iframe
          className="absolute inset-0 w-full h-full  opacity-50"
          src="https://www.youtube.com/embed/5VvEe0nlx9w?autoplay=1&mute=1&controls=0&loop=1&playlist=5VvEe0nlx9w&modestbranding=1&rel=0&showinfo=0"
          title="Background Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={false}
          controls={0}
        ></iframe>
      </div>
      <h1 className="text-3xl font-stylish text-center md:text-6xl mb-8 relative z-10">Testimonials</h1>
      {/* Small video placeholders */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 relative z-10">
        {/* Render testimonial cards */}
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md transform hover:scale-105 transition duration-300">
              <p className="text-gray-800 mb-4">&quot;<strong>{testimonialsData[index % 4].text}</strong>&quot;</p>
              <div className="flex justify-center mb-4">
                {generateStars(5)} {/* Assuming all testimonials are 5-star */}
              </div>
              <p className="text-gray-600 font-semibold">- <strong>{testimonialsData[index % 4].name}</strong></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
