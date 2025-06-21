// App.jsx
import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import BlogPostList from './components/blogPostList';
import BlogPostDetail from './components/BlogPostDetail';
import BlogPostForm from './components/blogPostForm';
import About from './components/About';
import Layout from './components/Layout';

const initialPosts = [
  {
    id: '1',
    title: 'Understanding React',
    summary: 'An introduction to React concepts and architecture.',
    content: '<p>This is the <strong>full content</strong> of Understanding React.</p>',
    author: 'John Doe',
    date: '2024-05-15'
  },
  {
    id: '2',
    title: 'Advanced CSS Tips',
    summary: 'Take your CSS skills to the next level with these tips.',
    content: '<p>This is the <em>complete article</em> on advanced CSS.</p>',
    author: 'Jane Smith',
    date: '2024-05-20'
  },
  {
    id: '3',
    title: 'Accessibility in Web Development',
    summary: 'Tips for making your web applications more accessible.',
    content: '<p>Make your apps accessible for all users.</p>',
    author: 'Alex Roe',
    date: '2023-03-10'
  }
];

function App() {
  const [posts, setPosts] = useState(initialPosts);
  const navigate = useNavigate();

  const addPost = (newPost) => {
    setPosts([...posts, { ...newPost, id: Date.now().toString() }]);
    navigate('/');
  };

  const updatePost = (updatedPost) => {
    setPosts(posts.map(p => p.id === updatedPost.id ? updatedPost : p));
    navigate('/');
  };

  const deletePost = (id) => {
    setPosts(posts.filter(p => p.id !== id));
    navigate('/');
  };

  return (
    <Layout> {/* 👈 Layout wraps ALL content */}
      <Routes>
        <Route path="/" element={<BlogPostList posts={posts} />} />
        <Route path="/posts/:id" element={<BlogPostDetail posts={posts} onDelete={deletePost} />} />
        <Route path="/new" element={<BlogPostForm onSubmit={addPost} />} />
        <Route path="/edit/:id" element={<BlogPostForm posts={posts} onSubmit={updatePost} />} />
        <Route path="/about" element={<About />} /> {/* ✅ This is now correctly wrapped */}
      </Routes>
    </Layout>
  );
}

export default App;
