import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className={styles.searchBar}>
      <label htmlFor="search" className={styles.label}>
        Search Posts
      </label>
      <input
        id="search"
        type="text"
        placeholder="Search by title or summary..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className={styles.input}
      />
    </div>
  );
};

export default SearchBar;
