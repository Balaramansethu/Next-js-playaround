'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data.reverse()));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Posts</h1>
      <ul className="space-y-3">
        {posts.map((post, index) => (
          <li key={index} className="p-4 bg-white rounded shadow">
            <Link href={`/posts/${index}`} className="text-xl font-semibold text-blue-600 hover:underline">
              {post.title}
            </Link>
            <p className="text-gray-600">{post.content.slice(0, 50)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
