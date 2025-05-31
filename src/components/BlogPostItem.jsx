<<<<<<< HEAD
import styles from './BlogPostItem.module.css';
import { Link } from 'react-router-dom';

export default function BlogPostItem({ post }) {
  return (
    <div className={styles.card}>
      <Link to={`/posts/${post.id}`} className={styles.link}>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.summary}>{post.summary}</p>
        <div className={styles.meta}>
          <span>{post.author}</span> | <span>{new Date(post.date).toDateString()}</span>
        </div>
      </Link>
    </div>
  );
}
=======
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BlogPostItem.module.css';

const BlogPostItem = ({ title, summary, content, author, date, url }) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className={styles.blogPostItem}>
      <Link to={url} className={styles.title}>
        <h2>{title}</h2>
      </Link>
      <div className={styles.meta}>
        <span className={styles.author}>By {author}</span>
        <span className={styles.date}>Published on {formattedDate}</span>
      </div>
      <p className={styles.summary}>{summary}</p>
    </div>
  );
};

export default BlogPostItem; 
>>>>>>> 5bd1606ef09ad3a5fc6efb478f17573066fc0f41
