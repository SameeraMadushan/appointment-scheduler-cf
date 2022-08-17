import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const client = axios.create({
  baseURL: baseUrl,
  headers: { "Content-Type": "application/json" }
});

export default client;
