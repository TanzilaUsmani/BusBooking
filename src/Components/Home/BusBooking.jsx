import React, { useState } from "react";
// import "./BusBooking.css";

const Seat = ({ seatNumber, isBookable, isSelected, onSelect }) => {
  const seatClass = `seat ${isBookable ? "available" : "unavailable"} ${
    isSelected ? "selected" : ""
  }`;

  return (
    <div
      className={seatClass}
      onClick={() => isBookable && onSelect(seatNumber)}
    >
      {seatNumber}
    </div>
  );
};

const BusBooking = ({ busData1 }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
    const [busData] = useState({
      boardingDetails: [
        {
          boardingName: "Transport Nagar - InrCity Lounge",
          boardingTime: "22:40",
        },
      ],
      droppingDetails: [
        {
          droppingName: "ISBT Kashmiri Gate - Boarding Zone",
          droppingTime: "06:40",
        },
      ],
      seatLayout: [
        { seatNumber: "859", bookable: true },
        { seatNumber: "859", bookable: true },
        { seatNumber: "859", bookable: true },
        { seatNumber: "789", bookable: true },
        { seatNumber: "789", bookable: true },
        { seatNumber: "1559", bookable: false },
        { seatNumber: "1879", bookable: true },
        { seatNumber: "1879", bookable: true },
        { seatNumber: "1009", bookable: true },
        { seatNumber: "1299", bookable: true },
        { seatNumber: "1299", bookable: true },
        { seatNumber: "1719", bookable: true },
        { seatNumber: "1719", bookable: true },
        { seatNumber: "789", bookable: true },
      ],
    });

  const handleSeatSelect = (seatNumber) => {
    setSelectedSeats((prev) =>
      prev.includes(seatNumber)
        ? prev.filter((seat) => seat !== seatNumber)
        : [...prev, seatNumber]
    );
  };

  return (
    <div className="bus-booking-container">
      <div className="header">
        <h1>InrCity Smartbus</h1>
        <span>Washroom</span>
      </div>
      <div className="trip-details">
        <span>
          {busData?.boardingDetails[0]?.boardingTime} -{" "}
          {busData?.droppingDetails[0]?.droppingTime}
        </span>
        <span>
          {busData?.boardingDetails[0]?.boardingName} -{" "}
          {busData?.droppingDetails[0]?.droppingName}
        </span>
      </div>
      <div className="fare-details">
        <span>Seater: ₹789</span>
        <span>Sleeper: ₹949</span>
        <span>Private Sleeper: ₹1489</span>
      </div>
      <div className="tabs">
        <button className="active">Available Seats</button>
        <button>Amenities</button>
        <button>Booking Policy</button>
      </div>
      <div className="seat-layout">
        <div className="lower-deck">
          {busData?.seatLayout.slice(0, 5).map((seat) => (
            <Seat
              key={seat?.seatNumber}
              seatNumber={seat?.seatNumber}
              isBookable={seat?.bookable}
              isSelected={selectedSeats?.includes(seat.seatNumber)}
              onSelect={handleSeatSelect}
            />
          ))}
        </div>
        <div className="upper-deck">
          {busData.seatLayout?.slice(5).map((seat) => (
            <Seat
              key={seat?.seatNumber}
              seatNumber={seat?.seatNumber}
              isBookable={seat?.bookable}
              isSelected={selectedSeats?.includes(seat.seatNumber)}
              onSelect={handleSeatSelect}
            />
          ))}
        </div>
      </div>
      <div className="boarding-details">
        <h3>Boarding Point</h3>
        <p>{busData?.boardingDetails[0]?.boardingName}</p>
        <h3>Dropping Point</h3>
        <p>{busData?.droppingDetails[0]?.droppingName}</p>
      </div>
      <div classAmenities="amenities">
        <span>WiFi</span>
        <span>Washroom</span>
        <span>Charging Point</span>
        <span>Ticket Booking</span>
        <span>Personal Assistance</span>
        <span>Air Conditioner</span>
      </div>
    </div>
  );
};

export default BusBooking;
