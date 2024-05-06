import React, { useState, useRef } from "react";

const ContactDetailsMobileView = ({ onNextStep }) => {
  const [promoCode, setPromoCode] = useState(["", "", "", "", "", ""]); 
  const inputRefs = useRef([]); 

  
  const handleNextClick = () => {
    onNextStep(); 
  };

  return (
    <div className="container mx-auto mt-4 px-4">
      <h2 className="text-sm font-semibold text-[#222222] mb-2">
        Contact Details
      </h2>
      <p className="text-xs text-[#222222] font-normal mb-6">
        We'll use this information to send you confirmation and updates about
        your booking.
      </p>
      <div className="mb-4">
        <div className="border-[1px]  border-[#C2C2C2] rounded-lg h-12 relative flex items-center">
          <label
            htmlFor="firstName"
            className="absolute left-4 text-xs -top-2 font-normal bg-white px-1 text-[#AEACAC]"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full p-2 border-none text-base ml-3 text-xs font-normal text-[#222222] focus:outline-none bg-transparent"
            placeholder=""
            required
          />
        </div>
      </div>
      <div className="mb-4">
        <div className="border-[1px] border-[#C2C2C2] rounded-lg h-12  relative flex items-center">
          <label
            htmlFor="lastName"
            className="absolute left-4 text-xs -top-2 font-normal bg-white px-1 text-[#AEACAC]"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="w-full p-2 border-none text-base ml-3 text-xs font-normal text-[#222222] focus:outline-none bg-transparent"
            placeholder=""
            required
          />
        </div>
      </div>
      <div className="mb-4">
        <div className="border-[1px] border-[#C2C2C2] rounded-lg h-12 relative flex items-center">
          <label
            htmlFor="email"
            className="absolute left-4 text-xs -top-2 font-normal bg-white px-1 text-[#AEACAC]"
          >
            Email ID
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border-none text-base ml-3 font-normal text-[#222222] focus:outline-none bg-transparent"
            placeholder=""
            required
          />
        </div>
      </div>
      <div className="mb-4">
        <div className="border-[1px] border-[#C2C2C2] rounded-lg h-12  relative flex items-center">
          <label
            htmlFor="phone"
            className="absolute left-4 text-xs -top-2 font-normal bg-white px-1 text-[#AEACAC]"
          >
            Phone Number
          </label>
          <select
            id="countryCode"
            className="w-20 p-2 border-none text-base ml-2 text-xs font-normal text-[#787878] focus:outline-none bg-transparent"
            required
          >
            <option value="+1">+91</option>
            <option value="+91">+1</option>
          </select>
          <input
            type="tel"
            id="phone"
            className="w-full p-2 border-none text-base ml-3 text-xs font-normal text-[#222222] focus:outline-none bg-transparent"
            placeholder=""
            required
          />
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-sm font-semibold text-[#222222] mb-2">
          Promo Code
        </h2>
        <p className="text-xs font-normal text-[#222222] mb-4">
          Have a promo code? Enter it here.
        </p>
        <div className="border-[1px] border-[#C2C2C2] rounded-lg h-12  relative flex items-center">
          <label
            htmlFor="phone"
            className="absolute left-4 text-xs -top-2 font-normal bg-white px-1 text-[#AEACAC]"
          >
            Promo code
          </label>
         
            <input
              key=""
              type="text"
              className=" border-none p-5 text-xs font-medium text-[#222222] focus:outline-none bg-transparent"
              placeholder="CMP 34 56 78"
              
            />
          
        </div>
      </div>
      <button
        className="bg-[#1ED760] w-full text-[#222222] text-sm font-semibold px-4 py-3 rounded-lg"
        onClick={handleNextClick}
      >
        Next
      </button>
      <div className="mt-4">
        <h2 className="text-xs text-[#222222] font-semibold mb-2">
          Cancellation Policy
        </h2>
        <p className="text-[10px] font-normal text-[#222222]">
          Free cancellation and refund before 01/02/2024.{" "}
          <a href="#" className="text-blue-700 font-semibold underline">
            Learn more
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default ContactDetailsMobileView;
