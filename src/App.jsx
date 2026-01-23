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
<<<<<<< HEAD
    date: '2024-05-15',
    comments: [
      {
        id: 'c1',
        name: 'Alice',
        date: 'December 25, 2023 at 8:15 PM',
        text: 'Great introduction to React!',
        avatar: ''
      }
    ]
=======
    date: '2024-05-15'
>>>>>>> origin
  },
  {
    id: '2',
    title: 'Advanced CSS Tips',
    summary: 'Take your CSS skills to the next level with these tips.',
    content: '<p>This is the <em>complete article</em> on advanced CSS.</p>',
    author: 'Jane Smith',
<<<<<<< HEAD
    date: '2024-05-20',
    comments: []
=======
    date: '2024-05-20'
>>>>>>> origin
  },
  {
    id: '3',
    title: 'Accessibility in Web Development',
    summary: 'Tips for making your web applications more accessible.',
    content: '<p>Make your apps accessible for all users.</p>',
    author: 'Alex Roe',
<<<<<<< HEAD
    date: '2023-03-10',
    comments: []
=======
    date: '2023-03-10'
>>>>>>> origin
  }
];

function App() {
  const [posts, setPosts] = useState(initialPosts);
  const navigate = useNavigate();

  const addPost = (newPost) => {
<<<<<<< HEAD
    setPosts([...posts, { ...newPost, id: Date.now().toString(), comments: [] }]);
=======
    setPosts([...posts, { ...newPost, id: Date.now().toString() }]);
>>>>>>> origin
    navigate('/');
  };

  const updatePost = (updatedPost) => {
    setPosts(posts.map(p => p.id === updatedPost.id ? updatedPost : p));
    navigate('/');
  };

<<<<<<< HEAD
  const addComment = (postId, comment) => {
    setPosts(posts.map(p => {
      if (p.id === postId) {
        return {
          ...p,
          comments: [...(p.comments || []), { ...comment, id: Date.now().toString() }]
        };
      }
      return p;
    }));
  };

=======
>>>>>>> origin
  const deletePost = (id) => {
    setPosts(posts.filter(p => p.id !== id));
    navigate('/');
  };

  return (
    <Layout> {/* 👈 Layout wraps ALL content */}
      <Routes>
        <Route path="/" element={<BlogPostList posts={posts} />} />
<<<<<<< HEAD
        <Route
          path="/posts/:id"
          element={
            <BlogPostDetail
              posts={posts}
              onDelete={deletePost}
              onAddComment={addComment}
            />
          }
        />
=======
        <Route path="/posts/:id" element={<BlogPostDetail posts={posts} onDelete={deletePost} />} />
>>>>>>> origin
        <Route path="/new" element={<BlogPostForm onSubmit={addPost} />} />
        <Route path="/edit/:id" element={<BlogPostForm posts={posts} onSubmit={updatePost} />} />
        <Route path="/about" element={<About />} /> {/* ✅ This is now correctly wrapped */}
      </Routes>
    </Layout>
  );
}

export default App;
