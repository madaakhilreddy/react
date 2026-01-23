<<<<<<< HEAD
import styles from './blogPostItem.module.css';
=======
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
>>>>>>> 6af0c8844e915d96cef7fe8cbeede456bdd81e07
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
<<<<<<< HEAD
}
=======
};

export default BlogPostItem; 
>>>>>>> 5bd1606ef09ad3a5fc6efb478f17573066fc0f41
>>>>>>> 6af0c8844e915d96cef7fe8cbeede456bdd81e07
