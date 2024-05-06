import React from "react";
import pic1 from "../images/pic1.png";
import pic2 from "../images/pic2.png";
import pic3 from "../images/pic3.png";
import pic4 from "../images/pic4.png";
import pic6 from "../images/pic6.png";
import pic8 from "../images/pic8.png";
import pic9 from "../images/pic9.png";

const Services = () => {
  return (
    <section className="my-4 px-4">
      <h1 className="text-3xl font-stylish text-center md:text-6xl mb-8">Services</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* pic 1 div */}
        <div className="flex flex-col items-center justify-center">
          <img src={pic1} alt="Hair Services" className="w-64 h-64 object-cover rounded-lg mb-4" />
          <div className="text-center">
            <h2 className="text-xl font-stylish mb-2">Hair Services</h2>
            <p className="text-gray-600">Our hair services cater to all hair types and styles. Whether you're looking for a cut, color, or styling, our experienced stylists will help you achieve your desired look.</p>
          </div>
        </div>
        {/* pic 2 div */}
        <div className="flex flex-col items-center justify-center">
          <img src={pic2} alt="Makeup" className="w-64 h-64 object-cover rounded-lg mb-4" />
          <div className="text-center">
            <h2 className="text-xl font-stylish mb-2">Makeup</h2>
            <p className="text-gray-600">Let our makeup artists enhance your natural beauty for any occasion. From natural looks to glamorous styles, we've got you covered.</p>
          </div>
        </div>
        {/* pic 3 div */}
        <div className="flex flex-col items-center justify-center">
          <img src={pic3} alt="Skin Services" className="w-64 h-64 object-cover rounded-lg mb-4" />
          <div className="text-center">
            <h2 className="text-xl font-stylish mb-2">Skin Services</h2>
            <p className="text-gray-600">Revitalize your skin with our range of skincare treatments. From facials to peels, we'll help you achieve a healthy, radiant complexion.</p>
          </div>
        </div>
        {/* pic 4 div */}
        <div className="flex flex-col items-center justify-center">
          <img src={pic4} alt="Hands & Feet" className="w-64 h-64 object-cover rounded-lg mb-4" />
          <div className="text-center">
            <h2 className="text-xl font-stylish mb-2">Hands & Feet</h2>
            <p className="text-gray-600">Treat yourself to a manicure and pedicure for perfectly polished nails. Our technicians will pamper your hands and feet, leaving them soft and beautiful.</p>
          </div>
        </div>
        {/* pic 5 div */}
        <div className="flex flex-col items-center justify-center">
          <img src={pic6} alt="Bridal Services" className="w-64 h-64 object-cover rounded-lg mb-4" />
          <div className="text-center">
            <h2 className="text-xl font-stylish mb-2">Bridal Services</h2>
            <p className="text-gray-600">Look stunning on your special day with our bridal services. From hair and makeup to nails, we'll ensure you're picture-perfect from head to toe.</p>
          </div>
        </div>
        {/* pic 6 div */}
        <div className="flex flex-col items-center justify-center">
          <img src={pic8} alt="Nail Treatment" className="w-64 h-64 object-cover rounded-lg mb-4" />
          <div className="text-center">
            <h2 className="text-xl font-stylish mb-2">Nail Treatment</h2>
            <p className="text-gray-600">Our nail treatments will strengthen and beautify your nails. Whether you prefer gel, acrylic, or classic polish, we have options to suit every style.</p>
          </div>
        </div>
        {/* pic 7 div */}
        <div className="flex flex-col items-center justify-center">
          <img src={pic9} alt="Professional Training" className="w-64 h-64 object-cover rounded-lg mb-4" />
          <div className="text-center">
            <h2 className="text-xl font-stylish mb-2">Professional Training</h2>
            <p className="text-gray-600">Learn from the best with our professional training courses. Whether you're a beginner or looking to advance your skills, our instructors will help you succeed in the beauty industry.</p>
          </div>
        </div>
        {/* pic 8 div */}
        <div className="flex flex-col items-center justify-center">
          <img src={pic1} alt="Facial Treatments" className="w-64 h-64 object-cover rounded-lg mb-4" />
          <div className="text-center">
            <h2 className="text-xl font-stylish mb-2">Facial Treatments</h2>
            <p className="text-gray-600">Rejuvenate your skin with our range of facial treatments. From deep cleansing to anti-aging facials, we'll help you achieve a fresh and radiant complexion.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
