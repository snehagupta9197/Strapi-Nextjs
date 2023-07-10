"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { useEffect, useState } from "react";

import Nav from "./components/nav";
import GetPost from "../../packages/api/getQueries/getPost";

const queryClient = new QueryClient();

interface Post {
  id: number;
  attributes: {
    title: string;
    content: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface ApiResponse {
  data: Post[];
  meta: {
    pagination: Pagination;
  };
}

const useClientOnly = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/posts");
        const data: ApiResponse = await response.json();

        setPosts(data.data);
        setPagination(data.meta.pagination);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return { posts, pagination };
};

const Home: React.FC = () => {
  const { posts, pagination } = useClientOnly();

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Nav />
      <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
        <div className="flex justify-center items-center bg-white mx-auto w-3/4 rounded-lg my-16 p-16 text-gray-700">
          {/* <div>
            <h1 className="text-4xl font-medium">Available Post</h1>
          </div> */}
          <br />
          {/* <div>
            {posts.length > 0 ? (
              posts.map((post) => (
                <div key={post.id}>
                  <h1 className="font-bold text-gray-700 ">
                    #. {post.attributes.title}
                  </h1>
                  <p>{post.attributes.content}</p>
                </div>
              ))
            ) : (
              <div>No Post data available</div>
            )}
          </div> */}
          <QueryClientProvider client={queryClient}>
            <GetPost />
            <ReactQueryDevtools /> {/* Optional: Devtools for React Query */}
          </QueryClientProvider>

          {/* {pagination && (
            <div>
              <p>Page: {pagination.page}</p>
              <p>Page Size: {pagination.pageSize}</p>
              <p>Page Count: {pagination.pageCount}</p>
              <p>Total: {pagination.total}</p>
            </div>
          )} */}
        </div>
        {/* <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </button>
        </div> */}

        {/* <About /> */}
      </div>
    </>
  );
};

export default Home;
