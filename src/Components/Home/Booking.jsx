import React, { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";
import { BookTicket } from "../../Services/api";
const Booking = ({ busData, setBusData }) => {
  const today = new Date().toISOString().split("T")[0];
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    travelDate: today,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // let response = fetch("https://uat.travl.tech/api/bus/search", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // });
    // let res = response.then((res) => res.json());
    // let data = res.then((data) => console.log("Response:", data));
    // console.log("Response:", data);

    if (Object.values(formData).some((value) => !value)) {
      console.log("Please fill in all fields.");
      return setBusData(null);
    }
    try {
      console.log("Form Data:", formData);
      const result = await BookTicket(formData);
      console.log("Ticket Search Result:", result.data);
      setBusData(result.data);
    } catch (err) {
      console.error("Error booking ticket:", err);
    }

    // setBusData(response.data);
  };

  //   console.log("Bus Data:", busData);

  return (
    <div className="container-fluid">
      <h3 className="fw-semibold mb-4">Book Your Bus Ticket</h3>
      <div
        className="bg-primary text-white mt-5 p-4 mx-auto rounded"
        style={{ maxWidth: "1300px" }}
      >
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-column flex-md-row align-items-center gap-3">
            <div className="position-relative w-100 w-md-33">
              <input
                type="text"
                placeholder="Source City"
                name="origin"
                className="form-control pe-5"
                onChange={(e) => {
                  setFormData({ ...formData, origin: e.target.value });
                }}
              />
              <FaExchangeAlt className="position-absolute top-50 end-0 translate-middle-y me-2 text-success" />
            </div>
            <input
              type="text"
              placeholder="Destination City"
              name="destination"
              className="form-control w-100 w-md-33"
              onChange={(e) => {
                setFormData({ ...formData, destination: e.target.value });
              }}
            />
            <input
              type="date"
              className="form-control w-100 w-md-25"
              name="travelDate"
              defaultValue={today}
              onChange={(e) =>
                setFormData({ ...formData, travelDate: e.target.value })
              }
            />
            <input
              type="submit"
              name="Search"
              className="btn btn-success px-4"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
