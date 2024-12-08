import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from './components/Home';

const App = () => {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route 
          exact 
          path="/dashboard" 
          render={() => (isAuthenticated ? <Dashboard /> : <Navigate to="/login" />)} 
        />
      </Routes>
    </Router>
  );
};

export default App;
