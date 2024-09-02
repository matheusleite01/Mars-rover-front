import axios from "axios";

const api = axios.create({
  baseURL: "https://api-mars-rover-back.onrender.com",
});

export default api;
