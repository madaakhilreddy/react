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
import BlogPostItem from './BlogPostItem.jsx';
import styles from './BlogPostList.module.css';

const BlogPostList = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>No blog posts available.</p>
      </div>
    );
  }

  return (
    <div className={styles.blogPostList}>
      {posts.map((post) => (
        <BlogPostItem
          key={post.id}
          title={post.title}
          summary={post.summary}
          content={post.content}
          author={post.author}
          date={post.date}
          url={post.url}
        />
      ))}
    </div>
  );
};

export default BlogPostList; 
>>>>>>> 5bd1606ef09ad3a5fc6efb478f17573066fc0f41
