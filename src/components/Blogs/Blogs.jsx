// src/components/Blogs/Blogs.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Blogs.module.css';

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('http://localhost:5000/api/blogs');
      const data = await response.json();
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  return (
    <div className={styles.blogsContainer}>
      <h2>Recent Blogs</h2>
      {blogs.map((blog) => (
        <Link key={blog.slug} to={`/blogs/${blog.slug}`} className={styles.blogCardLink}>
          <div className={styles.blogCard}>
            <h3>{blog.title}</h3>
            <p>{blog.content.substring(0, 100)}...</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Blogs;
