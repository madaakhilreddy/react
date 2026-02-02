import React from 'react';
import Comment from './Comment';
import styles from './CommentList.module.css';

const CommentList = ({ comments = [] }) => {
    return (
        <div className={styles.list}>
            <h3 className={styles.title}>Comments</h3>
            {comments.length === 0 ? (
                <p className={styles.empty}>No comments yet. Be the first to share your thoughts!</p>
            ) : (
                comments.map((comment) => (
                    <Comment
                        key={comment.id}
                        name={comment.name}
                        date={comment.date}
                        text={comment.text}
                        avatar={comment.avatar}
                    />
                ))
            )}
        </div>
    );
};

export default CommentList;
