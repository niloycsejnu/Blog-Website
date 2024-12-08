import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [blogTitle, setBlogTitle] = useState('');
    const [blogContent, setBlogContent] = useState('');

    const handleCreateBlog = async () => {
        try {
            await axios.post('http://localhost:5000/api/blogs', { title: blogTitle, content: blogContent });
            alert('Blog Created');
        } catch (error) {
            console.error('Error creating blog', error);
        }
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <input 
                type="text" 
                placeholder="Blog Title" 
                value={blogTitle} 
                onChange={e => setBlogTitle(e.target.value)} 
            />
            <textarea 
                placeholder="Blog Content" 
                value={blogContent} 
                onChange={e => setBlogContent(e.target.value)} 
            />
            <button onClick={handleCreateBlog}>Create Blog</button>
        </div>
    );
};

export default Dashboard;
