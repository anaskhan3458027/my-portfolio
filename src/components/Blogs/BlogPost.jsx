// src/components/Blogs/BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Blogs.module.css';

const BlogPost = () => {
  const { slug } = useParams();

  // Simulating blog post content fetch
  const blogPosts = {
    'startingjavadevelopment': {
      title: "Java: Inflated Key Metrics For Wall Street And A Pedophile Hellscape For Kids",
      content: "<p>This is the content of the featured blog post.</p>"
    },
    'article': {
      title: "iLearningEngines: An Artificial Intelligence SPAC With Artificial Partners And Artificial Revenue",
      content: "<p>This is the content of the iLearningEngines blog post.</p>"
    },
    // Add more blog posts here...
  };

  const post = blogPosts[slug];

  if (!post) {
    return <p>Post not found!</p>;
  }

  return (
    <div className={styles.blogPostContainer}>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default BlogPost;
