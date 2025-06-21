import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <div style={{ padding: '20px' }}>
        <h1>About BlogApp</h1>
        <p>
          <strong>BlogApp</strong> is a responsive blog platform built with React. It allows users to
          read, create, edit, and delete blog posts with ease.
        </p>
        <p>
          This project demonstrates the use of React Router, reusable components, state
          management with hooks, and responsive UI using CSS Modules.
        </p>
        <h2>Features</h2>
        <ul>
          <li>View blog post list and details</li>
          <li>Create and edit blog posts</li>
          <li>Responsive layout for desktop and mobile</li>
          <li>Single-page navigation with React Router</li>
        </ul>
        <p>Developed as part of a React learning challenge.</p>
      </div>
    </div>
  );
};

export default About;
