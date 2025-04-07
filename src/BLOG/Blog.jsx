import React, { useState, useEffect } from 'react';
import { useNavigate, Link, data } from 'react-router-dom';
import axios from 'axios';

const Blog = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);


  const ids=localStorage.getItem("id")

  const token = localStorage.getItem('token');

  const logout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate('/bloglogin');
  };

  const handlePublish = async () => {
    if (!token) {
      alert("Please login again.");
      navigate('/bloglogin');
      return;
    }

    if (!title.trim() || !content.trim()) {
      alert("Title and content cannot be empty.");
      return;
    }

    try {
      await axios.post(
        'http://localhost:8000/blog/uploadblog',
        { title, content }, // body
        { headers: { Authorization: `Bearer ${token}` } } // headers ✅
      );
      
      alert("Post published!");
      setTitle('');
      setContent('');
      fetchPosts();
    } catch (err) {
      console.error(err);
      alert("Error publishing post.");
    }
  };

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/blog/allblogs`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(data);
  

  const handleDelete = async (postId) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    try {
      await axios.delete(`http://localhost:8000/blog/deleteblog/${postId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchPosts();
    } catch (err) {
      console.error(err);
      alert("Failed to delete post.");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="bg-white shadow py-4 mb-6">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">My Blog</div>
          <div className="space-x-4">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
            <button onClick={logout} className="bg-blue-600 text-white px-3 py-1 rounded w-[100px]">Logout</button>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 mb-10">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="text-xl font-semibold text-blue-700 mb-4">Create New Post</div>
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Post title"
              className="w-full mb-3 p-2 border rounded"
            />
            <textarea
              placeholder="Post content..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="4"
              className="w-full mb-4 p-2 border rounded"
            />
            <button
              onClick={handlePublish}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-[100px]"
            >
              Publish
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <div key={post._id || index} className="bg-white p-5 rounded-xl shadow-md">
            <div className="text-xl font-bold mb-2 text-blue-700">{post.title}</div>
            <div className="text-gray-600 mb-2">{post.content}</div>
            {post.author && (
              <div className="text-sm text-gray-500 mb-2">
                By: {post.author.name} ({post.author.email})
              </div>
            )}
            <div className="flex justify-between text-sm">
              <button className="text-blue-600 hover:underline">Edit</button>
              <button
                onClick={() => handleDelete(post._id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
