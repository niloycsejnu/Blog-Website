import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Optional, if you have stylesheets
import App from './App';  // Import the main App component
//import reportWebVitals from './reportWebVitals';  // Optional for performance tracking

// Render the App component inside the 'root' div in public/index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Optional: For performance measuring
reportWebVitals();
