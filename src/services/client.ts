import axios from "axios";

// Getting the base url from .env file
const baseUrl = process.env.NEXT_PUBLIC_API_URL;

// Creating axios client
const client = axios.create({
  baseURL: baseUrl,
  headers: { "Content-Type": "application/json" }
});

export default client;
