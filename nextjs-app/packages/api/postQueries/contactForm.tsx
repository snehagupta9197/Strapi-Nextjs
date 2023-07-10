// sendFormData.js
import { API_BASE_URL } from "./api";

import { useState } from "react";

type ApiResponse = {
  // Define the structure of the API response here
  // based on your Strapi API's expected response
  data: {
    id: number;
    attributes: {
      title: string;
      content: string;
      slug: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  }[];
};

type PostData = {
  name: string;
  email: string;
  message: string;
};

const API_URL = `${API_BASE_URL}/contact-queries`;
const usePostQuery = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const postQuery = async (data: PostData): Promise<ApiResponse | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("An error occurred while sending the form data.");
      } else {
        // return "Form submitted successfully!";
      }

      const responseData = await response.json();
      setIsLoading(false);
      setSuccess(true);
      return responseData as ApiResponse;
    } catch (err) {
      setIsLoading(false);
      setSuccess(false);
      setError("Failed to send form data");
      return null;
    }
  };

  return { postQuery, isLoading, error, success };
};

export default usePostQuery;
