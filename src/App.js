import React, { useState } from 'react';
import Header from './components/Header';
import BookNowMobileView from './components/Book-now-mobile-view';
import ContactDetailsMobileView from './components/Contact-details-mobile-view';
import PaymentDetailsMobileView from './components/Payment-details-mobile-view';
import './styles.css'

const App = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleNextStep = () => {
    setActiveStep(activeStep + 1);
  };

  return (
    <div className="max-w-screen-sm mx-auto px-2"> 
      <Header />
      <BookNowMobileView activeStep={activeStep} />
      <hr className="my-2 border-t-1 border-[#D7D7D7]" />
      {activeStep === 1 && <ContactDetailsMobileView onNextStep={handleNextStep} />}
      {activeStep === 2 && <PaymentDetailsMobileView />}
    
    </div>
  );
};

export default App;