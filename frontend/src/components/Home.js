import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/blog')
      .then(response => setBlogs(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {blogs.map((blog, index) => (
          <div key={index}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
