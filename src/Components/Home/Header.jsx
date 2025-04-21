import React from "react";

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center border-bottom shadow-sm p-3">
      <div className="fs-4 fw-bold text-success">
        intr <span className="text-primary">city</span> smartbus
      </div>
      <div className="d-none d-md-flex gap-3 small">
        <span>IntrCity Club</span>
        <span>Bus Tickets</span>
        <span>Group Booking</span>
        <span>Data Room</span>
      </div>
      <div className="d-flex align-items-center gap-3">
        <a
          href="tel:04843540685"
          className="text-primary small text-decoration-none"
        >
          Call to book 04843540685
        </a>
        <button className="btn btn-success btn-sm">Sign In</button>
      </div>
    </div>
  );
};

export default Header;
