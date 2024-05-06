import React, { useState } from 'react';

const PaymentDetailsMobileView = () => {
  const [expiryDate, setExpiryDate] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleExpiryDateChange = (e) => {
    let value = e.target.value;
    value = value.replace(/[^\d/]/g, '');
    if (value.length > 2 && value.indexOf('/') === -1) {
      value = value.substring(0, 2) + '/' + value.substring(2);
    }
    setExpiryDate(value);
  };

  const handleTermsCheck = (e) => {
    setTermsChecked(e.target.checked);
  };

  const handlePaymentMethodChange = (method) => {
    setSelectedMethod(method);
  };

  const handlePay = () => {
    if (termsChecked && selectedMethod) {
      alert('Payment successful');
    } else {
      alert('Please accept the terms and conditions and select a payment method.');
    }
  };

  return (
    <div className="px-4 mt-4">
      <h2 className="text-sm text-[#222222] font-semibold mb-2">Payment Details</h2>
      <p className="text-xs text-[#222222] font-normal mb-6">
        Complete your purchase with confidence. Your transactions are encrypted for a safe and seamless payment experience.
      </p>
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex items-center">
          <input
            type="radio"
            id="cardMethod"
            name="paymentMethod"
            value="Card"
            checked={selectedMethod === 'Card'}
            onChange={() => handlePaymentMethodChange('Card')}
          />
          <label htmlFor="cardMethod" className="ml-1 text-xs  font-medium text-[#222222]">
            Card
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="gpayMethod"
            name="paymentMethod"
            value="GooglePay"
            checked={selectedMethod === 'GooglePay'}
            onChange={() => handlePaymentMethodChange('GooglePay')}
          />
          <label htmlFor="gpayMethod" className="ml-1 text-sm font-medium text-[#222222]">
            <img src="google-pay-icon.png" alt="Google Pay Icon" className="  w-12 h-5 mr-1" />
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="upiMethod"
            name="paymentMethod"
            value="UPI"
            checked={selectedMethod === 'UPI'}
            onChange={() => handlePaymentMethodChange('UPI')}
          />
          <label htmlFor="upiMethod" className="ml-1 text-sm font-medium text-[#222222]">
            <img src="upi-icon.png" alt="UPI Icon" className="w-10 h-5 mr-1" />
          </label>
        </div>
      
      </div>
      <div className="mb-4 relative">
      <label
          htmlFor="cardNumber"
          className="block text-sm text-[#0A0909] font-medium tracking-wider mb-2"
        >
          Card number
        </label>
        <input
          type="text"
          id="cardNumber"
          className="border border-[#C2C2C2] px-2 py-1 text-sm font-normal text-[#787878] tracking-wider rounded-lg h-12 w-full"
          placeholder="1234 1234 1234 1234"
          style={{
            backgroundImage: `url('cards-icon.png')`,
            backgroundSize: "126px 30px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 10px center",
          }}
        />
        
      </div>
      <div className="flex justify-between space-x-4">
        <div className="w-1/2 relative">
          <label htmlFor="expiryDate" className="block text-sm text-[#0A0909] font-medium tracking-wider mb-2">
            Exp. date
          </label>
          <input
            type="text"
            id="expiryDate"
            className="border border-[#C2C2C2] px-2 py-1 text-sm font-normal text-[#787878] tracking-wider rounded-lg h-12 w-full"
            placeholder="MM/YY"
            value={expiryDate}
            onChange={handleExpiryDateChange}
          />
        </div>
        <div className="w-1/2 relative">
        <label
            htmlFor="securityCode"
            className="block text-sm text-[#0A0909] font-medium tracking-wider mb-2"
          >
            Security code
          </label>
          <div className="relative">
            <input
              type="text"
              id="securityCode"
              className="border border-[#C2C2C2] px-2 py-1 text-sm font-normal text-[#787878] tracking-wider rounded-lg h-12 w-full "
              placeholder="CVV"
            />
            <img
              src="cvv-icon.png"
              alt="Security Icon"
              className="absolute top-4 right-4 h-5 w-"
            />
          </div>
        </div>
      </div>
      <button className="w-full h-14 bg-[#1ED760] text-[#222222] text-lg font-semibold px-4 py-2 rounded-lg mt-6" onClick={handlePay}>
        Pay ₹ 22500
      </button>
      <div className="mt-4 flex items-center">
        <input
          type="checkbox"
          id="termsCheckbox"
          checked={termsChecked}
          onChange={handleTermsCheck}
          className="mr-2"
        />
        <label htmlFor="termsCheckbox" className="text-xs font-normal text-gray-400">
          Agree with <button className="text-[10px] font-semibold text-blue-600 cursor-pointer">Terms & Conditions</button>
        </label>
      </div>
    </div>
  );
};

export default PaymentDetailsMobileView;
