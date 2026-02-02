import React, { useState } from 'react';
import BlogPostItem from './BlogPostItem';
import SearchBar from './SearchBar';
import styles from './BlogPostList.module.css';

const BlogPostList = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      {filteredPosts.length === 0 ? (
        <p style={{ padding: '10px' }}>No matching blog posts found.</p>
      ) : (
        <div className={styles.blogPostList}>
          {filteredPosts.map((post) => (
            <BlogPostItem
              key={post.id}
              title={post.title}
              summary={post.summary}
              date={post.date}
              url={post.url}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default BlogPostList;
