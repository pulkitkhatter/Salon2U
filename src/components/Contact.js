import React from "react";
import footerCover from "../images/footerCover.png";
import linkedIn from "../images/linkedIn.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import insta from "../images/insta.png";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <>
      <main
        className="bg-cover bg-center flex flex-col items-center justify-center py-4"
        style={{ backgroundImage: `url(${footerCover})` }}
      >
        <h1 className="font-stylish text-3xl text-center md:text-6xl">
          Contact Us
        </h1>
        <div className="flex flex-col md:space-x-8 md:items-baseline md:flex-row">
          <form className="flex flex-col md:items-center">
            <div className="flex flex-col space-y-3 mt-3 md:flex-row md:items-center md:space-x-3">
              <div className="flex flex-col space-y-3">
                <input
                  type="text"
                  className="border-[1px] border-gray-400 rounded-lg w-[230px] p-1"
                  placeholder="Full Name"
                />
                <input
                  type="text"
                  className="border-[1px] border-gray-400 rounded-lg w-[230px] p-1"
                  placeholder="Mobile Number"
                />
                <input
                  placeholder="Email"
                  type="text"
                  className="border-[1px] border-gray-400 rounded-lg w-[230px] p-1"
                />
              </div>
              <div>
                <textarea
                  className="border-[1px] border-gray-400 rounded-lg p-1"
                  name="message"
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#FF00C7] my-2 w-fit p-1 rounded-full px-4 text-white font-semibold"
            >
              Submit
            </button>
          </form>
          <section className="flex space-x-4 mt-4 md:flex-col md:space-x-0 md:space-y-2">
            <button className="active:scale-105 w-fit transition transform duration-150">
              <a
                href="https://www.linkedin.com/in/mehendi-wala-a99542264/"
                target={"_blank"}
              >
                <img
                  src={linkedIn}
                  alt="linked in logo"
                  className="w-10 md:w-8 "
                />
              </a>
            </button>
            {/* <button className="active:scale-105 transition transform duration-150">
              <a href="#" target={"_blank"}>
                <img
                  src={facebook}
                  alt="linked in logo"
                  className="w-10 md:w-8 "
                />
              </a>
            </button> */}
            <button className="active:scale-105 w-fit transition transform duration-150">
              <a href="https://twitter.com/TheMehndiWala" target={"_blank"}>
                <img
                  src={twitter}
                  alt="linked in logo"
                  className="w-10 md:w-8 "
                />
              </a>
            </button>
            {/* <button className="active:scale-105 w-fit transition transform duration-150">
              <a href="#" target={"_blank"}>
                <img
                  src={insta}
                  alt="linked in logo"
                  className="w-10 md:w-8 "
                />
              </a>
            </button> */}
            <button className="flex space-x-3 items-center">
              <a href="mailto:themehendiwala@gmail.com" target={"_blank"}>
                <span>
                  <HiOutlineMail className="text-white bg-black text-3xl p-1 rounded-full" />
                </span>
              </a>
            </button>
          </section>
        </div>
      </main>
    </>
  );
};

export default Contact;
