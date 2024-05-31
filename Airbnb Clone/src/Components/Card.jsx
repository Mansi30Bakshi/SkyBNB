import React from 'react';

const Card = ({ imageUrl, hoverText }) => {
  return (
    <div className="relative m-10">
      <img 
        src={imageUrl} 
        alt={hoverText} 
        className="h-60 w-65 rounded-lg hover:opacity-50"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-70 transition-opacity duration-200">
        <span className="text-white text-lg bg-black bg-opacity-100 rounded p-2">
          {hoverText}
        </span>
      </div>
    </div>
  );
}

export default Card;
