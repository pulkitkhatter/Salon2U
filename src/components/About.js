import React from "react";
import aboutPic from "../images/aboutUsPic.png";

const About = () => {
  return (
    <div className="flex justify-center items-center px-4 md:px-0">
      <div className="md:flex md:space-x-10 md:items-center">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-6xl font-stylish my-4 md:my-1">About Us</h1>
          <p className="md:w-[600px] md:text-xl text-gray-700 bg-gray-500 bg-opacity-50 md:p-6 rounded-md">
            Welcome to Mehndi Wallah, your premier destination for exquisite mehendi designs brought right to your doorstep. At Mehndi Wallah, we take pride in offering traditional mehendi artistry as a sophisticated alternative to tattoos, all within the comfort of your own home. Our skilled artists specialize in creating intricate and personalized designs, ensuring that each stroke reflects your unique style and personality. Whether it's for weddings, festivals, or any special occasion, Mehndi Wallah is here to elevate your beauty experience with our home-to-home salon services.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <img
            src={aboutPic}
            alt="about us pic"
            className="w-[350px] md:w-[660px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
