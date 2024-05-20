// src/components/Itinerary.js
import React from 'react';
import { Link } from 'react-router-dom';

const Itinerary = ({ itinerary }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Itinerary</h2>
      {itinerary.length > 0 ? (
        <ul>
          {itinerary.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No itinerary available. Please plan your trip first.</p>
      )}
      <Link to="/plan-trip">
        <button>Plan Another Trip</button>
      </Link>
    </div>
  );
};

export default Itinerary;
