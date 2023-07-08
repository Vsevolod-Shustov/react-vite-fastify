import React from 'react';
import { useState, useEffect } from 'react';
import './index.css';

//const dataUrl = 'https://jsonplaceholder.typicode.com/posts';
const dataUrl =
('http://localhost:5000/api/posts');

export default function App() {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    async function startFetching() {
      setPosts(null);
      const fetched = await fetch(dataUrl);
      console.log("fetched :");
      console.log(fetched);
      const parsed = await fetched.json();
      console.log("parsed :");
      console.log(parsed);
      if (!ignore) {
        setPosts(parsed);
      }
    }

    let ignore = false;
    startFetching();
    return () => {
      ignore = true;
    };
  }, []);

  return <>{JSON.stringify(posts)}</>;
}