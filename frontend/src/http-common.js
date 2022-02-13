import axios from "axios"; // axios : library for GET/POST requery 

export default axios.create({
  baseURL:
    "https://localhost:5000/api/v1/restaurants",
  headers: {
    "Content-type": "application/json",
  },
});
