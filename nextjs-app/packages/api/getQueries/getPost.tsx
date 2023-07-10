"use client";

import { useFetchData } from "./api";

function GetPost() {
  const { data, isLoading, isError } = useFetchData("posts");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data.</div>;
  }

  return (
    <div className="getpost">
      {data.data.map((post: { id: number; title: string; attributes: any }) => (
        <div key={post.id}>
          <h1 className="font-bold text-gray-700 ">
            #. {post.attributes.title}
          </h1>
          <p>{post.attributes.content}</p>
        </div>
      ))}
      {/* {data && data.map((post) => <div key={post.id}>{post.title}</div>)} */}
    </div>
  );
}

export default GetPost;
