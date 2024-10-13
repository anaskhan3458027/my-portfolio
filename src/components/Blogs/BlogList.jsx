// src/components/Blogs/BlogList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Blogs.module.css';

const BlogList = () => {
  const featuredPost = {
    title: "Roblox: Inflated Key Metrics For Wall Street And A Pedophile Hellscape For Kids",
    date: "October 8, 2024",
    slug: "startingjavadevelopment"
  };

  const recentPosts = [
    {
      title: "Core Java: experience during lerning java after c++ ",
      date: "August 29, 2024",
      slug: "ttt"
    },
    // Add more recent posts here...
  ];

  return (
    <div className={styles.blogContainer}>
      <h1>Blog</h1>

      {/* Featured Post */}
      <div className={styles.featuredPost}>
        <h2>{featuredPost.title}</h2>
        <p>Published on {featuredPost.date}</p>
        <Link to={`/blogs/${featuredPost.slug}`} className={styles.readLink}>Read More</Link>
      </div>

      {/* Recent Posts */}
      <h3>Recent Posts</h3>
      <ul>
        {recentPosts.map((post) => (
          <li key={post.slug}>
            <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
            <p>Published on {post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
