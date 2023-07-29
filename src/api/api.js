// src/api/api.js

import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8800/api", // Replace with your backend URL
});

export default instance;
