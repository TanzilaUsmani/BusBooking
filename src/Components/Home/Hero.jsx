import React from "react";
import herobus from "../Image/herobus.png";
const Hero = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-sm-6">
          <h1 className="display-6 fw-light">It's not a bus</h1>
          <h2 className="display-6 fw-bold text-primary mt-2">
            It's a SmartBus
          </h2>
          <div className="container my-4">
            <div className="row text-center">
              <div className="col-6 col-md-3 border-start">
                <p className="mb-0 fw-medium">
                  In-Bus
                  <br />
                  Washroom
                </p>
              </div>
              <div className="col-6 col-md-3 border-start">
                <p className="mb-0 fw-medium">
                  Smart Boarding
                  <br />
                  Lounges
                </p>
              </div>
              <div className="col-6 col-md-3 border-start">
                <p className="mb-0 fw-medium">
                  Safety and
                  <br />
                  Hygiene
                </p>
              </div>
              <div className="col-6 col-md-3 border-start">
                <p className="mb-0 fw-medium">
                  Trained Bus
                  <br />
                  Captain
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 py-3">
          <img className="heroimg" src={herobus} alt="Hero Bus" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
