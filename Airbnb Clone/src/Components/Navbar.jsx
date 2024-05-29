import React from "react";
import { Link, NavLink } from "react-router-dom";
import Stays from "./Stays";
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
        <div className=" navup pb-5">
            <ul className = "flex space-x-20 justify-center items-center mt-10 ml-64 text-xl">
              <Link className="text-black hover:text-black hover:border-b-2 hover:border-gray-300" to="/Stays">Stays</Link>
              <Link  className="text-black hover:black hover:border-b-2 hover:border-gray-300" to="/Experien">Experiences</Link>
              <Link  className="text-black hover:black hover:border-b-2 hover:border-gray-300" to="OnlineExp">Online Experiences</Link>
              <Link  className="text-black hover:black hover:border-b-2 hover:border-gray-300" to="YourHome">SkyBNB your Home</Link>
              <FaUserAlt className="justify-right ml-60"/>
            </ul>
          </div>
      </div>
      <SearchBar/>
    </>
  );
};

export default Navbar;

