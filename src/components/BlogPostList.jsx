// BlogPostList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BlogPostList.module.css';

function BlogPostList({ posts }) {
  if (!posts.length) return <p className={styles.empty}>No blog posts available.</p>;

  return (
    <div className={styles.list}>
      <h1>Blog Posts</h1>
      <Link to="/new" className={styles.newPostButton}>New Post</Link>
      {posts.map(post => (
        <div className={styles.postCard} key={post.id}>
          <Link to={`/posts/${post.id}`}><h2>{post.title}</h2></Link>
          <p>{post.summary}</p>
          <p className={styles.meta}>{post.author} | {new Date(post.date).toDateString()}</p>
          <Link to={`/edit/${post.id}`} className={styles.editLink}>Edit</Link>
        </div>
      ))}
    </div>
  );
}

export default BlogPostList;
