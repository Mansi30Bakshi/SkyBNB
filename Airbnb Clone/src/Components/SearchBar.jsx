// import React from 'react'

// const SearchBar = () => {
//   return (
//     <>
//     <div className='border-2 border-black-500 rounded-xl center h-35 w-auto mb-4'>
//     <div className='justify-center'>
//       <div className='font-bold'>Where?</div>
//       <span className='font-light text-center text-gray-600'>Seach Destination</span>
//     </div>
//     </div>
//     </>
//   )
// }

// export default SearchBar

import React from 'react';
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <>
      <div className='border rounded-full border-slate-300 p-2 ml-20 mr-20 mb-5'>
      <div className='flex items-center  space-x-10 justify-between ml-8 mr-6 space-x-1 grid grid-cols-5 divide-x'>
      <div className=''>
          <div className='font-light'>Where</div>
          <span className='font-thin text-gray-600'>Search Destinations</span>
          </div>
          <div className=''>
          <div className='font-light ml-3'>Check in</div>
          <span className='font-thin text-gray-600 ml-3'>Add dates</span>
          </div>
          <div className=''>
          <div className='font-light ml-3'>Check out</div>
          <span className='font-thin text-gray-600 ml-3'>Add Dates</span>
          </div>
          <div className=''>
          <div className='font-light ml-3'>Who</div>
          <span className='font-thin text-gray-600 ml-3'>Add Guests</span>
          </div>
          <div className=''>
          <BsSearch className='ml-3' /><div className='font-light text-gray-600 ml-3'> Search </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
