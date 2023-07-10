import { useQuery } from "react-query";

const API_BASE_URL = "http://localhost:1337/api"; // Replace with your Strapi backend URL

async function fetchData(endpoint: string) {
  const response = await fetch(`${API_BASE_URL}/${endpoint}`);
  console.log("data", response);
  if (!response.ok) {
    throw new Error("An error occurred while fetching the data.");
  }
  return response.json();
}

export function useFetchData(endpoint: string) {
  return useQuery(endpoint, () => fetchData(endpoint));
}
