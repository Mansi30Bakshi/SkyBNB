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

const SearchBar = () => {
  return (
    <>
      <div className='border-2 border-black-300 rounded-xl p-3 mb-4 bg-white'>
      <div className='flex items-center space-x-10 justify-center'>
         <div>
          <div className='font-bold'>Where</div>
          <span className='font-light text-gray-600'>Search Destination</span>
          </div>
          <div className='border-r border-gray-200'></div>
          <div>
          <div className='font-bold'>Check in</div>
          <span className='font-light text-gray-600'>Add dates</span>
          </div>
          <div className='border-r border-gray-200'></div>
          <div>
          <div className='font-bold'>Check out</div>
          <span className='font-light text-gray-600'>Add Dates</span>
          </div>
          <div className='border-r border-gray-200'></div>
          <div>
          <div className='font-bold'>Who</div>
          <span className='font-light text-gray-600'>Add Guests</span>
          </div>

        </div>
      </div>
    </>
  );
};

export default SearchBar;
