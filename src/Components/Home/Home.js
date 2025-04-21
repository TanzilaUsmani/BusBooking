import React, { useState } from 'react';
import '../../Components/common.css';
import Header from './Header';
import Hero from './Hero';
import Booking from './Booking';
import Club from './Club';
import BusList from './BusList';
import BusBooking from './BusBooking';
import Savingscards from './Savingscard';
import OfferSlider from './OfferSlider';
import Smartbus from './Smartbus';
import SmartBusJourney from './Booksmartbus';


function Home() {
  const [busData, setBusData] = useState(null);
  console.log("busData==", busData);

  return (
    <div className="font-sans">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />
      {/* Booking Section */}

      <Booking busData={busData} setBusData={setBusData} />
      {/* <BusBooking /> */}
      <BusList busData1={busData} />
      <Club />
      <Savingscards/>
      <OfferSlider/>
      <Smartbus/>
      <SmartBusJourney/>
      
    </div>
  );
}

export default Home;
