// src/components/Blogs/Blogs.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogList from './BlogList';
import BlogPost from './BlogPost';
import styles from './Blogs.module.css';

const Blogs = () => {
  return (
    <div className={styles.blogContainer}>
      <Routes>
        <Route path="/" element={<BlogList />} />  {/* Blog listing page */}
        <Route path="/:slug" element={<BlogPost />} />  {/* Individual blog post page */}
      </Routes>
    </div>
  );
};

export default Blogs;
