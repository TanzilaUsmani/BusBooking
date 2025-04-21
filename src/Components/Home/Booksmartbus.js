// SmartBusJourney.js
import React from 'react';
import pocketImg from '../Image/pocketfrndly1.png'; // Replace with your image paths
import ticketImg from '../Image/flixitc.png';
import routeImg from '../Image/trackbus.png';

const SmartBusJourney = () => {
  return (
    <div className="container text-center my-5">
      <h2 className="fw-bold">SmartBus Assists You at Every Step of Your Journey</h2>
      <p className="text-primary fw-semibold mt-3">Booking a SmartBus</p>

      <div className="row mt-5 justify-content-center align-items-end">
        <div className="col-md-4 mb-3">
          <img src={pocketImg} alt="Pocket" className="img-fluid" style={{ maxWidth: '150px',height:"103px" }} />
        </div>
        <div className="col-md-4 mb-3">
          <img src={ticketImg} alt="Ticket" className="img-fluid" style={{ maxWidth: '150px',height:"103px" }} />
        </div>
        <div className="col-md-4 mb-3">
          <img src={routeImg} alt="Route" className="img-fluid" style={{ maxWidth: '150px',height:"103px" }} />
        </div>
      </div>
    </div>
  );
};

export default SmartBusJourney;
