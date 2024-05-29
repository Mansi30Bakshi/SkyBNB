import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { MdPool } from "react-icons/md";
import { GiMountainCave } from "react-icons/gi";
import { GiMasterOfArms } from "react-icons/gi";
import { MdCastle } from "react-icons/md";
import { TbUfo } from "react-icons/tb";
import { FaHouseFloodWater } from "react-icons/fa6";
import { GiElvenCastle } from "react-icons/gi";
import { IoGolfOutline } from "react-icons/io5";
import { TbTrees } from "react-icons/tb";
import { TbPool } from "react-icons/tb";
import { GiHutsVillage } from "react-icons/gi";
import { GiDesert } from "react-icons/gi";
import { GiFoodTruck } from "react-icons/gi";
import { GiHillFort } from "react-icons/gi";
const HorizontalScroller = () => {
  // Create a ref to the scrollable container
  const scrollContainerRef = useRef(null);

  // Function to scroll to the left
  const scrollToLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 100; // Adjust the amount scrolled
    }
  };

  // Function to scroll to the right
  const scrollToRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 100; // Adjust the amount scrolled
    }
  };

  return (
    <div className="scroller-container bg-black text-white">
      {/* Previous Button */}

      {/* Scrollable Content */}
      <div ref={scrollContainerRef} style={{ display: 'flex', overflowX: 'scroll', whiteSpace: 'nowrap' }}>
        {/* Repeat this block for each item you want to scroll horizontally */}
        <Link to="#" style={{ minWidth: '9%', padding: '20px' }}><MdPool className='h-10 w-10 hover:border-b-2 hover:border-gray-300"'/></Link>
        <Link to="#" style={{ minWidth: '9%', padding: '20px' }}><GiMountainCave className='h-10 w-10 hover:border-b-2 hover:border-gray-300"' /></Link>
        <Link to="#" style={{ minWidth: '9%', padding: '20px' }}><GiMasterOfArms className='h-10 w-10 hover:border-b-2 hover:border-gray-300"'/></Link>
        <Link to="#" style={{ minWidth: '9%', padding: '20px' }}><MdCastle className='h-10 w-10 hover:border-b-2 hover:border-gray-300"'/></Link>
        <Link to="#" style={{ minWidth: '9%', padding: '20px' }}><TbUfo className='h-10 w-10 hover:border-b-2 hover:border-gray-300"'/></Link>
        <Link to="#" style={{ minWidth: '9%', padding: '20px' }}><FaHouseFloodWater className='h-10 w-10 hover:border-b-2 hover:border-gray-300"'/></Link>
        <Link to="#" style={{ minWidth: '9%', padding: '20px' }}><GiElvenCastle className='h-10 w-10 hover:border-b-2 hover:border-gray-300"'/></Link>
        <Link to="#" style={{ minWidth: '9%', padding: '20px' }}><IoGolfOutline className='h-10 w-10 hover:border-b-2 hover:border-gray-300"'/></Link>
        <Link to="#" style={{ minWidth: '9%', padding: '20px' }}><TbTrees className='h-10 w-10 hover:border-b-2 hover:border-gray-300"'/></Link>
        <Link to="#" style={{ minWidth: '9%', padding: '20px' }}><TbPool className='h-10 w-10 hover:border-b-2 hover:border-gray-300"'/></Link>
        <Link to="#" style={{ minWidth: '9%', padding: '20px' }}><GiHutsVillage className='h-10 w-10 hover:border-b-2 hover:border-gray-300"' /></Link>
        <Link to="#" style={{ minWidth: '9%', padding: '20px' }}><GiDesert className='h-10 w-10 hover:border-b-2 hover:border-gray-300"'/></Link>
        <Link to="#" style={{ minWidth: '9%', padding: '20px' }}><GiFoodTruck className='h-10 w-10 hover:border-b-2 hover:border-gray-300"' /></Link>
        <Link to="#" style={{ minWidth: '9%', padding: '20px' }}><GiHillFort className='h-10 w-10 hover:border-b-2 hover:border-gray-300"'/></Link>

      </div>
    </div>
  );
};

export default HorizontalScroller;
