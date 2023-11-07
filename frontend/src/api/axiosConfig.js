import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
  //baseURL: "https://bank.nicepebble-4de4e797.eastus.azurecontainerapps.io/",
});

export const exchange = axios.create({
  baseURL: "https://v6.exchangerate-api.com/",
});

export default api;
