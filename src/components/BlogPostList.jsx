<<<<<<< HEAD
import BlogPostItem from './BlogPostItem';
import styles from './BlogPostList.module.css';

export default function BlogPostList({ posts }) {
  if (!posts.length) return <p className={styles.empty}>No blog posts available.</p>;

  return (
    <div className={styles.list}>
      {posts.map(post => (
        <BlogPostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

=======
import React from 'react';
import { Link } from 'react-router-dom';
import './blogPostList.module.css';

function BlogPostList({ posts }) {
  return (
    <div className="post-list">
      <h1>Blog Posts</h1>
      <Link to="/new" className="new-post-button">New Post</Link>
      {posts.map(post => (
        <div className="post-card" key={post.id}>
          <Link to={`/posts/${post.id}`}><h2>{post.title}</h2></Link>
          <p>{post.summary}</p>
          <p className="meta">{post.author} | {new Date(post.date).toDateString()}</p>
          <Link to={`/edit/${post.id}`} className="edit-link">Edit</Link>
        </div>
      ))}
    </div>
  );
}

<<<<<<< HEAD
export default BlogPostList;
=======
export default BlogPostList; 
>>>>>>> 5bd1606ef09ad3a5fc6efb478f17573066fc0f41
>>>>>>> 6af0c8844e915d96cef7fe8cbeede456bdd81e07
