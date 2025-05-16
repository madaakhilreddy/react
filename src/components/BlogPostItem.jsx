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