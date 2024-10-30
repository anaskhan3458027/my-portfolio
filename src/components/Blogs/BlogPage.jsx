// src/components/Blogs/BlogPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BlogPage() {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await fetch(`http://localhost:5000/api/blogs/${blogId}`);
      const data = await response.json();
      setBlog(data);
    };
    fetchBlog();
  }, [blogId]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogPage;
