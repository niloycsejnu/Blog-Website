import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/blog')
      .then(response => setBlogs(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Blog Page</h1>
      <div>
        {blogs.map((blog, index) => (
          <div key={index}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <p><em>{blog.author}</em></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
