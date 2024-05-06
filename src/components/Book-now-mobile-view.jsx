
import React from 'react';

const BookNowMobileView = ({ activeStep }) => {
  return (
    <div className="container mx-auto mt-2  flex items-center justify-center">
      <div className="flex items-center space-x-4">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[#222222] font-medium text-xs ${activeStep === 1 ? 'bg-[#1ED760]' : 'bg-[#1ED760]'}`}>1</div>
        <h2 className="text-sm font-medium text-[#222222]">Contact Details</h2>
        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[#222222] font-medium text-xs ${activeStep === 2 ? 'bg-[#1ED760]' : 'bg-gray-300'}`}>2</div>
        <h2 className="text-sm font-medium text-[#222222]">Payment Details</h2>
      </div>
    </div>
  );
};

export default BookNowMobileView;
