import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/service')
      .then(response => setServices(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Service Page</h1>
      <div>
        {services.map((service, index) => (
          <div key={index}>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
