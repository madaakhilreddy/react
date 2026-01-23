// BlogPostDetail.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import styles from './BlogPostDetail.module.css';

export default function BlogPostDetail({ posts, onDelete, onAddComment }) {
=======
import styles from './BlogPostDetail.module.css';

export default function BlogPostDetail({ posts, onDelete }) {
>>>>>>> origin
  const { id } = useParams();
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);

  const post = posts.find(p => p.id === id);

  if (!post) return <p className={styles.empty}>Post not found.</p>;

  const handleDelete = () => {
    onDelete(id);
    navigate('/');
  };

<<<<<<< HEAD
  const handleCommentSubmit = (comment) => {
    onAddComment(id, comment);
  };

=======
>>>>>>> origin
  return (
    <article className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.meta}>
        By <strong>{post.author}</strong> on {new Date(post.date).toDateString()}
      </div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <div style={{ marginTop: '2rem' }}>
        <button className={styles.deleteButton} onClick={() => setShowConfirm(true)}>
          Delete Post
        </button>
      </div>

<<<<<<< HEAD
      <div className={styles.commentsSection}>
        <CommentList comments={post.comments} />
        <CommentForm onSubmit={handleCommentSubmit} />
      </div>

=======
>>>>>>> origin
      {showConfirm && (
        <div className={styles.confirmOverlay} onClick={() => setShowConfirm(false)}>
          <div
            className={styles.confirmDialog}
            onClick={e => e.stopPropagation()}
            role="dialog"
            aria-labelledby="confirm-title"
            aria-describedby="confirm-desc"
          >
            <h2 id="confirm-title">Confirm Deletion</h2>
            <p id="confirm-desc">Are you sure you want to delete this post?</p>
            <div className={styles.buttonGroup}>
              <button onClick={() => setShowConfirm(false)}>Cancel</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
