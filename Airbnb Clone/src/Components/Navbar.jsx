import React from "react";
import { Link, NavLink } from "react-router-dom";
import Stays from "./Stays";
import Experien from "./Experien";
import OnlineExp from "./OnlineExp";
import YourHome from "./YourHome";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <>
      <div className="navbar flex-col items-center bg-white">
        <img src="" alt="skybnb" className="mt-4 ml-3"></img>
        <div className="navup pb-5">
            <ul className = "flex space-x-10 justify-center">
              <Link to="/Stays">Stays</Link>
              <Link to="/Experien">Experiences</Link>
              <Link to="/OnlineExp">Online Experiences</Link>
              <Link to="/YourHome">SkyBNB your Home</Link>
              {/* <Link className="ml-auto">Profile icon</Link> */}
            </ul>
          </div>
      </div>
      <SearchBar/>
    </>
  );
};

export default Navbar;
