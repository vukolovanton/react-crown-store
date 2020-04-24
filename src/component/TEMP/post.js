import React, { useState, useEffect } from "react";
import useFetch from "./use-fetch";

const Post = ({ postId }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const post = useFetch(
      `https://jsonplaceholder.typicode.com/posts?id=${postId}`
    );

    const fetchPost = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?id=${postId}`
      );
      const posts = await res.json();
      setPost(posts[0]);
    };
    fetchPost();
  });

  return <div></div>;
};
