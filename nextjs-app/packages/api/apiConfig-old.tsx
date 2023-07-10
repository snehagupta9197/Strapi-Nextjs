import { useQuery, useMutation } from "react-query";

const API_BASE_URL = "http://localhost:1337/api";
async function fetchData(endpoint: string) {
  const response = await fetch(`${API_BASE_URL}/${endpoint}`);
  console.log("data", response);
  if (!response.ok) {
    throw new Error("An error occurred while fetching the data.");
  }
  return response.json();
}

async function postData(endpoint: string, data: any) {
  const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log("response", response);
  if (!response.ok) {
    throw new Error("An error occurred while sending the data.");
  }
  return response.json();
}

export function useFetchData(endpoint: string) {
  return useQuery(endpoint, () => fetchData(endpoint));
}

export function usePostQuery(endpoint: string) {
  return useMutation((data) => postData(endpoint, { data }));
}
