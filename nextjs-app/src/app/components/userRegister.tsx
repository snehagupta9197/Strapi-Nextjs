"use client";

import React, { ReactNode, useState, ChangeEvent, FormEvent } from "react";
import { useRegisterQuery } from "../../../packages/api/apiConfig";

interface FormValues {
  name: string;
  email: string;
  password: string;
}

// interface MyError {
//   status: number;
//   name: string;
//   message: string;
//   details: {
//     errors: {
//       path: string[];
//       message: string;
//       name: string;
//     }[];
//   };
// }

export default function UserRegister() {
  const [formData, setFormData] = useState<FormValues>({
    name: "",
    email: "",
    password: "",
  });

  const { mutate, isLoading, error, isSuccess } =
    useRegisterQuery("register-users");

  const handleRetry = () => {
    mutate(formData);
  };

  if (error) {
    console.log("API Error", error);
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate(formData);
  };

  //   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //     const { name, value } = event.target;
  //     setFormData((prevFormData) => ({
  //       ...prevFormData,
  //       [name]: value,
  //     }));
  //   };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="flex items-center justify-center bg-white w-3/4">
        <div className="mx-auto w-full max-w-lg">
          <h1 className="text-4xl font-medium text-gray-700">
            User Register Form
          </h1>

          <form onSubmit={handleSubmit} className="mt-10">
            <input
              type="hidden"
              name="access_key"
              value="YOUR_ACCESS_KEY_HERE"
            />
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative z-0">
                <input
                  type="text"
                  name="name"
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                  value={formData.name || ""}
                  onChange={handleChange}
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                  Your name
                </label>
              </div>
              <div className="relative z-0">
                <input
                  type="text"
                  name="email"
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                  value={formData.email || ""}
                  onChange={handleChange}
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                  Your email
                </label>
              </div>
              <div className="relative z-0">
                <input
                  type="password"
                  name="password"
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                  value={formData.password || ""}
                  onChange={handleChange}
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                  Your password
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="mt-5 rounded-md bg-black px-10 py-2 text-white"
            >
              {isLoading ? "Processing..." : "Submit"}
            </button>
            <button
              type="reset"
              className="ml-[5px] mt-5 rounded-md bg-black px-10 py-2 text-white"
              onClick={handleRetry}
            >
              Retry
            </button>
            {error && (
              <p className="text-red-700">
                ValidationError: This attribute must be unique
              </p>
            )}
            {isSuccess && (
              <p className="text-green-700">Form submitted successfully!</p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
