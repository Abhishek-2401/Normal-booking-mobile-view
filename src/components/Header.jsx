// Header.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'; 

const Header = ({ onBack }) => {
  return (
    <div>
      <header className="py-4 px-6 flex items-center justify-between">
       
        <div className="text-[#222222] cursor-pointer" onClick={onBack}>
          <FontAwesomeIcon icon={faChevronLeft} size="md" />
        </div>
     
        <h1 className="text-base font-medium text-[#222222]">Book Now</h1>
      
        <div></div>
      </header>
    
      <hr className="border-t-1 border-r-0 border-b-1 border-l-0 border-solid border-[#D7D7D7]" />
    </div>
  );
};

export default Header;
