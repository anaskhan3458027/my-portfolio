// src/components/Admin/AdminPage.jsx
import React, { useState } from 'react';
import styles from './AdminPage.module.css';

function AdminPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blogData = {
      title,
      slug: title.toLowerCase().replace(/\s+/g, '-'), // Create a URL-friendly slug
      content,
    };

    await fetch('http://localhost:5000/api/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blogData),
    });

    setTitle('');
    setContent('');
    alert('Blog posted successfully!');
  };

  return (
    <div className={styles.adminContainer}>
      <h2>Create New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Post Blog</button>
      </form>
    </div>
  );
}

export default AdminPage;
