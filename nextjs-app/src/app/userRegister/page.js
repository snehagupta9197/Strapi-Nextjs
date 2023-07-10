"use client";

import Nav from "../components/nav";
import UserRegister from "../components/userRegister";
import { QueryClient, QueryClientProvider } from "react-query";

export default function Page() {
  const queryClient = new QueryClient();
  return (
    <>
      <Nav />
      <div></div>;
      <div className="flex justify-center items-center bg-white mx-auto w-2/4 rounded-lg my-16 p-16 text-gray-700">
        <QueryClientProvider client={queryClient}>
          <UserRegister />
        </QueryClientProvider>
      </div>
    </>
  );
}
