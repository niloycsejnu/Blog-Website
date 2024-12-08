import React, { useEffect, useState } from 'react';
import axios from 'axios';

const About = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/team')
      .then(response => setTeam(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>About Us</h1>
      <div>
        {team.map((member, index) => (
          <div key={index}>
            <h2>{member.name}</h2>
            <p>{member.role}</p>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
