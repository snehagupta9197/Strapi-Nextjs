import { useQueryClient, useQuery, useMutation } from "react-query";
const API_BASE_URL = "http://localhost:1337/api";

interface ApiResponse<T> {
  data: T | null;
  isLoading: boolean;
  error: T | null;
  success: boolean;
}

async function API_Data<T>(
  endpoint: string,
  method: string = "GET",
  data?: any
): Promise<ApiResponse<T>> {
  const requestOptions: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (data) {
    requestOptions.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, requestOptions);
    console.log("response", response);

    if (!response.ok) {
      // throw new Error("An error occurred while fetching the data.");
      const errorResponse = await response.json();
      throw new Error(errorResponse.message);
    }

    const responseData = await response.json();
    return { data: responseData, isLoading: false, error: null, success: true };
  } catch (error) {
    return { data: null, isLoading: false, error, success: false };
  }
}

export function useFetchData(endpoint: string) {
  return useQuery(endpoint, async () => {
    const response = await API_Data(endpoint);

    if (response.error) {
      throw response.error;
    }

    return response.data;
  });
}

export function useRegisterQuery(endpoint: string) {
  const queryClient = useQueryClient();
  return useMutation(async (data) => {
    const response = await API_Data(endpoint, "POST", { data });

    if (response.error) {
      throw response.error;
    }

    const handleRetry = () => {
      queryClient.invalidateQueries(endpoint); // Optional: Invalidates the cache for the specified endpoint
      queryClient.refetchQueries(endpoint); // Triggers a refetch for the specified endpoint
    };

    return response.data;
  });
}
