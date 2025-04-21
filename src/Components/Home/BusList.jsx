import React, { useState } from "react";
import { GetBusDetails } from "../../Services/api";
import BusBooking from "./BusBooking";

const BusList = ({ busData1 }) => {
  console.log("busData1==", busData1);

  const [busData, setBusData] = useState(null);
  const [activeBusKey, setActiveBusKey] = useState(null);

  const handleSeatSelect = async (bus) => {
    const newData = {
      requestId: busData1?.requestId,
      boardingPointId: bus?.boardingPointId,
      dropingPointId: bus?.dropingPointId,
      busKey: bus?.busKey,
    };

    // api call

    try {
      const result = await GetBusDetails(newData);
      console.log("Ticket Search Result:==>", result.data);
      setBusData(result.data);
      setActiveBusKey(bus.busKey);
    } catch (err) {
      console.error("Error booking ticket:", err);
    }
  };

  return (
    <>
      <div className="container py-3">
        {busData1?.tripDetails?.map((bus, index) => (
          <div key={index} className="card mb-4 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <img
                    src="https://via.placeholder.com/50x50?text=Logo"
                    alt="logo"
                    height="40"
                  />
                  <div>
                    <h5 className="mb-1">{bus.operatorName}</h5>
                    <span className="badge bg-primary me-2">{bus.busType}</span>
                    {bus.AC && <span className="badge bg-secondary">❄ AC</span>}
                  </div>
                </div>

                <div className="text-end">
                  <div className="fw-bold fs-5">
                    {bus.departureTime}{" "}
                    <span className="text-muted">• {bus.duration} •</span>{" "}
                    {bus.arrivalTime}
                  </div>
                  <div className="text-muted">
                    From City: {bus.fromCity} → To City: {bus.toCity}
                  </div>
                </div>
              </div>

              <div className="mt-3 d-flex justify-content-between align-items-center flex-wrap">
                <div className="d-flex gap-2 align-items-center">
                  {/* Rating is not available, so we skip or hardcode */}
                  <span className="badge bg-success">★ 4.5</span>
                  <a href="#" className="ms-3 text-primary">
                    View Full Route ›
                  </a>
                </div>

                <div className="d-flex gap-4 text-end">
                  <div className="align-self-end">
                    <small className="text-muted">Seats Available</small>
                    <div>{bus.availableSeats} Seat(s)</div>
                  </div>
                  <button
                    className="btn btn-success align-self-center"
                    onClick={() => handleSeatSelect(bus)}
                  >
                    Select Seats
                  </button>
                </div>
              </div>
              {bus.busKey === activeBusKey && busData && (
                <BusBooking busData1={busData} />
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BusList;
