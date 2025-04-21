import axios from "axios";

const BASE_URL = "https://uat.travl.tech/api/bus";

const api = axios.create({
  baseURL: BASE_URL,
});

export const BookTicket = async (ticketData) => {
  try {
    console.log("Ticket Data:", ticketData);
    const res = await api.post("/search", ticketData);
    console.log("Response:", res);
    return res.data;
  } catch (error) {
    console.error("BookTicket error:", error.response?.data || error.message);
    throw error;
  }
};

// https: export const GetBusDetails = async (busId) => {};

export const GetBusDetails = async (seatData) => {
  try {
    console.log("Ticket Data:", seatData);
    const res = await api.post("/seatmap?resp=1", seatData);
    console.log("Response:", res);
    return res.data;
  } catch (error) {
    console.error("BookTicket error:", error.response?.data || error.message);
    throw error;
  }
};
