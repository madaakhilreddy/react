import React from 'react';
import styles from './Comment.module.css';

const Comment = ({ name, date, text, avatar }) => {
    return (
        <div className={styles.comment}>
            <div className={styles.avatar}>
                {avatar ? (
                    <img src={avatar} alt={`${name}'s avatar`} className={styles.avatarImg} />
                ) : (
                    <div className={styles.avatarPlaceholder} />
                )}
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <span className={styles.name}>{name}</span>
                    <span className={styles.date}>{date}</span>
                </div>
                <p className={styles.text}>{text}</p>
            </div>
        </div>
    );
};

export default Comment;
