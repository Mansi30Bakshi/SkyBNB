import React from "react";
import { Link, NavLink } from "react-router-dom";
// import Stays from "./Stays";
import Experien from "./Experien";
import OnlineExp from "./OnlineExp";
import YourHome from "./YourHome";
import SearchBar from "./SearchBar";
import { FaAirbnb } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <div className="flex bg-white">
        <img src="https://miro.medium.com/v2/resize:fit:1400/1*87ce_sVbWHSHpDhCMBwKtA.png" alt="skybnb" className="mt-4 ml-3 h-20 w-35 justify-left"></img>
        <div className=" navup pb-8 flex">
            <ul className = "flex space-x-20  items-center mt-9  text-small font-">
            <Link className="text-gray-500 hover:border-b-1 hover:border-gray-300 ml-64 hover:bg-gray-100 transition-shadow duration-300 px-4 py-2 rounded-full active:text-black active:border-b-1" to="/">Stays</Link>


              <Link  className="text-gray-500 hover:text-black hover:border-b-1 hover:border-gray-300 hover:shadow-lg hover:bg-gray-100 transition-shadow duration-300 px-4 py-2 rounded-full" to="/Experien">Experiences</Link>
              <Link  className="text-gray-500 hover:text-black hover:border-b-1 hover:border-gray-300 hover:shadow-lg hover:bg-gray-100 transition-shadow duration-300 px-4 py-2 rounded-full" to="OnlineExp">Online Experiences</Link>
              <Link  className="text-gray-500 hover:text-black hover:border-b-1 hover:border-gray-300 hover:shadow-lg hover:bg-gray-100 transition-shadow duration-300 px-4 py-2 rounded-full" to="YourHome">SkyBNB your Home</Link>
              {/* <FaUserAlt className="justify-right ml-60"/> */}
            </ul>
            {/* <Link  className="text-black hover:black hover:border-b-2 hover:border-gray-300 mt-10 ml-12  text-xl" to="YourHome">SkyBNB your Home</Link> */}
          </div>
      </div>
      <SearchBar/>
    </>
  );
};

export default Navbar;

