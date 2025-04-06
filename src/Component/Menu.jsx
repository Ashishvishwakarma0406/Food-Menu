import React from 'react';
import { Bookmark, Share2, Star } from 'lucide-react';

const Menu = ({ item }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} size={16} fill="#facc15" stroke="#facc15" />);
    }
    if (hasHalfStar && fullStars < 5) {
      stars.push(<Star key="half" size={16} fill="#facc15" stroke="#facc15" style={{ opacity: 0.5 }} />);
    }
    while (stars.length < 5) {
      stars.push(<Star key={`empty-${stars.length}`} size={16} stroke="#d1d5db" />);
    }
    return stars;
  };

  return (
    <div className="flex justify-between items-start w-full max-w-[600px] min-w-0 p-4 sm:p-6 bg-white rounded-lg shadow-sm border-2 border-gray-200 hover:shadow-2xl transition duration-300 ease-in-out overflow-hidden">
      
      {/* Left part */}
      <div className="flex flex-col justify-between gap-2 w-[60%] h-full">
        <div className="flex items-center gap-2">
          {/* Veg logo */}
          <div className="w-4 h-4 border-2 border-green-600 rounded-sm flex items-center justify-center">
            <div className="w-2 h-2 bg-green-600 rounded-lg" />
          </div>
          {/* Time */}
          <div className="bg-gray-200 text-xs px-2 py-0.5 rounded flex items-center gap-1">
            <span className='text-green-600'>▶</span>
            <span className='text-green-600 font-semibold'>15 mins</span>
          </div>
        </div>

        {/* Name */}
        <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-600">
          {renderStars(item.rating)}
          <span className="text-sm text-gray-800 ml-2">({item.reviews})</span>
        </div>

        {/* Price */}
        <p className="text-lg font-semibold text-gray-800">{item.price}</p>

        {/* Details */}
        <p className="text-gray-600 text-lg line-clamp-2">
          {item.description}
          <span className="text-gray-800 font-medium">...more</span>
        </p>

        {/* Action buttons */}
        <div className="flex items-center gap-4">
          <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-500 hover:bg-gray-100 transition">
            <Bookmark size={18} className="text-gray-700" />
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-500 hover:bg-gray-100 transition">
            <Share2 size={18} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Right part */}
      <div className="relative w-[40%] flex flex-col items-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-40 h-40 object-cover rounded-xl"
        />
        <button className="absolute bottom-12 transform translate-y-1/2 bg-red-50 text-red-600 font-semibold border-2 border-red-600 rounded-lg px-8 py-2 text-sm">
          ADD +
        </button>
        <span className="text-gray-600 mt-6">customisable</span>
      </div>
    </div>
  );
};

export default Menu;
