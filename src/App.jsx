import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BlogPostList from './components/BlogPostList.jsx'
import './App.css'

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Getting Started with React',
      summary: 'React is a powerful library for building user interfaces...',
      content: 'React is a powerful library for building user interfaces. It allows you to create reusable UI components that manage their own state.',
      author: 'John Doe',
      date: '2024-03-20',
      url: '/post/1'
    },
    {
      id: 2,
      title: 'Understanding Hooks',
      summary: 'Hooks are a new addition in React 16.8 that let you use state...',
      content: 'Hooks are a new addition in React 16.8 that let you use state and other React features without writing a class component.',
      author: 'Jane Smith',
      date: '2024-03-21',
      url: '/post/2'
    }
  ])

  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>My Blog</h1>
        </header>
        <main className="blog-posts">
          <Routes>
            <Route 
              path="/" 
              element={<BlogPostList posts={posts} />} 
            />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
