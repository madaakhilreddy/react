import React, { useState } from 'react';
import styles from './CommentForm.module.css';

const CommentForm = ({ onSubmit, isLoggedIn, userName }) => {
    const [name, setName] = useState(isLoggedIn ? userName : '');
    const [text, setText] = useState('');
    const [avatar, setAvatar] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim() || (!isLoggedIn && !name.trim())) return;

        onSubmit({
            name: isLoggedIn ? userName : name,
            text,
            avatar,
            date: new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
        });

        // Reset form
        if (!isLoggedIn) setName('');
        setText('');
        setAvatar('');
    };

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.field}>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <input
                        id="name"
                        type="text"
                        className={styles.input}
                        value={isLoggedIn ? userName : name}
                        onChange={(e) => !isLoggedIn && setName(e.target.value)}
                        disabled={isLoggedIn}
                        placeholder="Your Name"
                        required
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="comment" className={styles.label}>Comment</label>
                    <textarea
                        id="comment"
                        className={styles.textarea}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Write your comment here..."
                        required
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="avatar" className={styles.label}>Avatar URL (optional)</label>
                    <input
                        id="avatar"
                        type="url"
                        className={styles.input}
                        value={avatar}
                        onChange={(e) => setAvatar(e.target.value)}
                        placeholder="https://example.com/avatar.jpg"
                    />
                </div>

                <button type="submit" className={styles.submitButton}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CommentForm;
