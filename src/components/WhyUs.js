import React from "react";
import hairPic from "../images/hair.jpg";
import products from "../images/products.png";
import cosmetics from "../images/cosmetics.png";
import discount from "../images/discount.png";
import abstract from "../images/abstract.png";

const WhyUs = () => {
  return (
    <main
      className="bg-cover bg-center mt-4 flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${hairPic})` }}
    >
      <span className="text-3xl font-stylish text-white md:text-6xl my-5 mb-3">
        {" "}
        Why Choose Us?
      </span>
      <div className="md:grid md:grid-cols-2 md:gap-y-[50px] md:gap-[100px] ">
        <div className="flex flex-col items-center justify-center my-4">
          <img
            src={products}
            alt="hair products"
            className="bg-white opacity-50 rounded-lg w-[100px]"
          />
          <span className="text-white w-[280px] text-center">
            Explore our carefully curated selection of hair products, meticulously chosen to nourish and enhance your hair's natural beauty.
          </span>
        </div>
        <div className="flex flex-col items-center justify-center my-4">
          <img
            src={cosmetics}
            alt="hair products"
            className="bg-white opacity-50 rounded-lg w-[100px]"
          />
          <span className="text-white w-[280px] text-center">
            Indulge in our premium line of cosmetics, expertly crafted to complement your unique style and elevate your beauty routine.
          </span>
        </div>
        <div className="flex flex-col items-center justify-center my-4">
          <img
            src={discount}
            alt="hair products"
            className="bg-white opacity-50 rounded-lg w-[100px] p-3"
          />
          <span className="text-white w-[280px] text-center">
            Enjoy exclusive discounts and special offers as a valued member of our community, because you deserve to feel pampered.
          </span>
        </div>
        <div className="flex flex-col items-center justify-center my-4">
          <img
            src={abstract}
            alt="hair products"
            className="bg-white opacity-50 rounded-lg w-[100px] p-2"
          />
          <span className="text-white w-[280px] text-center">
            Experience the artistry and innovation that sets us apart. Our dedication to excellence ensures you receive top-notch service and results every time.
          </span>
        </div>
      </div>
    </main>
  );
};

export default WhyUs;
