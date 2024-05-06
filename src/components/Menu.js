import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";

function Menu({
  scrollFunction, // function
  homeRef,
  servicesRef,
  aboutRef,
  whyUsRef,
  contactUsRef,
}) {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <div className="flex" onClick={() => setDropdown(!dropdown)}>
        <GiHamburgerMenu className="text-5xl rounded-md mr-4 bg-black bg-opacity-50 text-white p-2" />
      </div>
      {/* dropdown menu for the hamburgur menu */}
      {dropdown && (
        <div className="absolute top-[85px] left-[6px] rounded-md bg-pink-200 p-3">
          <div className="w-[91vw]">
            <div
              onClick={() => {
                scrollFunction(homeRef);
                setDropdown(false);
              }}
              className="p-2 bg-white rounded-md my-2 font-semibold text-gray-700"
            >
              <span>Home</span>
            </div>
            <div
              onClick={() => setDropdown(false)}
              className="p-2 rounded-md my-2 font-semibold text-gray-700"
            >
              <span className="flex items-center space-x-2">
                <AiOutlineUser className="text-blue-700" />
                <span>Login | Sign Up</span>
              </span>
            </div>
            <div
              onClick={() => {
                scrollFunction(servicesRef);
                setDropdown(false);
              }}
              className="p-2 hover:bg-gray-200 rounded-md my-2 font-semibold text-gray-700"
            >
              <span>Services</span>
            </div>
            <div
              onClick={() => {
                scrollFunction(aboutRef);
                setDropdown(false);
              }}
              className="p-2 hover:bg-gray-200 rounded-md my-2 font-semibold text-gray-700"
            >
              <span>About Us</span>
            </div>
            <div
              onClick={() => {
                scrollFunction(whyUsRef);
                setDropdown(false);
              }}
              className="p-2 hover:bg-gray-200 rounded-md my-2 font-semibold text-gray-700"
            >
              <span>Why Us ?</span>
            </div>
            <div
              onClick={() => setDropdown(false)}
              className="p-2 hover:bg-gray-200 rounded-md my-2 font-semibold text-gray-700"
            >
              <span>Gallery</span>
            </div>
            <div
              onClick={() => {
                scrollFunction(contactUsRef);
                setDropdown(false);
              }}
              className="p-2 hover:bg-gray-200 rounded-md my-2 font-semibold text-gray-700"
            >
              <span>Contact Us</span>
            </div>
            <div
              onClick={() => setDropdown(false)}
              className="p-2 hover:bg-gray-200 rounded-md my-2 font-semibold text-gray-700"
            >
              <span>More</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;
