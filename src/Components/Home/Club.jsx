import React from "react";
import free from "../Image/free.png";
import seat from "../Image/seat.png";
import easy from "../Image/easy.png";
import club from "../Image/club.png";

const Club = () => {
  return (
    <div className="container my-5 bg-light rounded shadow-sm p-4 intercitysection" style={{ maxWidth: '1300px'}}>
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-md-8">
          <h4 className="fw-bold text-warning">IntrCity Club Privileges</h4>
          <p className="text-muted">Pay with Miles</p>

          <div className="row text-center my-4">
            <div className="col-4 border-end">
              <img
                src={free}
                alt="Free Rides"
                className="mb-2"
                style={{ height: "90px" }}
              />
              <p className="small mb-0">Free Rides with Miles</p>
            </div>
            <div className="col-4 border-end">
              <img
                src={seat}
                alt="Seat Upgrade"
                className="mb-2"
                style={{ height: "90px" }}
              />
              <p className="small mb-0">Loyalty Seat Upgrades</p>
            </div>
            <div className="col-4">
              <img
                src={easy}
                alt="Reschedule"
                className="mb-2"
                style={{ height: "90px" }}
              />
              <p className="small mb-0">Easy Trip Reschedule*</p>
            </div>
          </div>

          <button className="btn btn-success px-4">Explore Club</button>
        </div>

        {/* Right Badge */}
        <div className="col-md-4 text-center">
          <img
            src={club}
            alt="Club Badge"
            className="img-fluid"
            style={{ maxHeight: "200px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Club;
