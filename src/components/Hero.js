import React from "react";
import coverPic from "../images/cover-pic.png";
import brand from "../images/brand.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "./Menu";

const Hero = ({
  scrollFunction, // function
  homeRef,
  servicesRef,
  aboutRef,
  whyUsRef,
  contactUsRef,
}) => {
  return (
    <>
      <section
        className="bg-cover bg-center h-[220px] md:h-[500px] relative"
        style={{ backgroundImage: `url(${coverPic})` }}
      >
        {/* MOBILE VIEW MENU AND BRAND*/}
        <div className="flex items-center px-2 justify-between lg:justify-center">
          {/* left navigation */}
          <div className="lg:flex space-x-6 hidden text-gray-600">
            <span onClick={() => scrollFunction(homeRef)}>HOME</span>
            <span onClick={() => scrollFunction(servicesRef)}>SERVICES</span>
            <span onClick={() => scrollFunction(aboutRef)}>ABOUT US</span>
            <span onClick={() => scrollFunction(whyUsRef)}>WHY US ?</span>
          </div>
          <img src={brand} alt="brand logo" className="w-[200px] md:mx-5" />
          {/* right navigation */}
          <div className="lg:flex space-x-6 hidden text-gray-600">
            <span>GALLERY</span>
            <span onClick={() => scrollFunction(contactUsRef)}>CONTACT US</span>
            <span>MORE</span>
          </div>
          <div className={`z-10 lg:hidden`}>
            <Menu
              scrollFunction={scrollFunction}
              homeRef={homeRef}
              servicesRef={servicesRef}
              aboutRef={aboutRef}
              whyUsRef={whyUsRef}
              contactUsRef={contactUsRef}
            />
          </div>
        </div>
        {/* DECLARATION SECTION */}
        <div className="flex flex-col space-y-2 top-[110px] left-[5vw] md:items-center absolute md:top-[200px] md:left-[15vw]">
          <span className="text-xl font-stylish md:text-4xl md:text-center">
            Best Salon and Mehndi
            <br />
            Services in the City!
          </span>
          <button
            type="button"
            className="bg-[#FF00C7] font-stylish px-3 md:text-2xl rounded-full text-white w-fit active:scale-105 transition transform duration-150 ease-out"
          >
            Book Now
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
