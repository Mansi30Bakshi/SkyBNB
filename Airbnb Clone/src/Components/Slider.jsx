import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
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
    <div className="scroller-container bg-gray-400">
      {/* Previous Button */}

      {/* Scrollable Content */}
      <div ref={scrollContainerRef} style={{ display: 'flex', overflowX: 'scroll', whiteSpace: 'nowrap' }}>
        {/* Repeat this block for each item you want to scroll horizontally */}
        <Link to="#" style={{ minWidth: '9%', padding: '30px' }}>CountrySide</Link>
        <Link to="#" style={{ minWidth: '9%', padding: '30px' }}>Caves</Link>
        <Link to="#" style={{ minWidth: '9%', padding: '30px' }}>Farms</Link>
        <Link to="#" style={{ minWidth: '9%', padding: '30px' }}>Castles</Link>
        <Link to="#" style={{ minWidth: '9%', padding: '30px' }}>Yurts</Link>
        <Link to="#" style={{ minWidth: '9%', padding: '30px' }}>Lakefront</Link>
        <Link to="#" style={{ minWidth: '9%', padding: '30px' }}>Mansions</Link>
        <Link to="#" style={{ minWidth: '9%', padding: '30px' }}>Beaches</Link>
        <Link to="#" style={{ minWidth: '9%', padding: '30px' }}>Golfing</Link>
        <Link to="#" style={{ minWidth: '9%', padding: '30px' }}>Tropical</Link>
        <Link to="#" style={{ minWidth: '9%', padding: '30px' }}>Pools</Link>
        <Link to="#" style={{ minWidth: '9%', padding: '30px' }}>Luxe</Link>
        <Link to="#" style={{ minWidth: '9%', padding: '30px' }}>OMG!</Link>
        <Link to="#" style={{ minWidth: '9%', padding: '30px' }}>Trending</Link>

      </div>
    </div>
  );
};

export default HorizontalScroller;
