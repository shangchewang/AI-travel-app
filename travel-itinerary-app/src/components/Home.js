// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to TravelEase AI</h1>
      <Link to="/plan-trip">
        <button>Plan a New Trip</button>
      </Link>
    </div>
  );
};

export default Home;
