import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlanTrip = ({ setItinerary }) => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [interests, setInterests] = useState('');
  const [budget, setBudget] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log('Form Submitted');
    try {
      const userInput = `Generate a travel itinerary for ${destination} from ${startDate} to ${endDate} focusing on interests: ${interests} with a budget of $${budget}.`;

      const response = await axios.post('http://localhost:3001/api/chat', {
        message: userInput
      });

      console.log('API Response:', response.data);
      setItinerary(response.data);
      navigate('/itinerary');
    } catch (error) {
      console.error('Error creating travel plan', error);
      alert('An error occurred while generating the itinerary. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Plan Your Trip</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Destination:</label>
          <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} required />
        </div>
        <div>
          <label>Start Date:</label>
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
        </div>
        <div>
          <label>End Date:</label>
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
        </div>
        <div>
          <label>Interests (comma separated):</label>
          <input type="text" value={interests} onChange={(e) => setInterests(e.target.value)} required />
        </div>
        <div>
          <label>Budget:</label>
          <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} required />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Generating Itinerary...' : 'Generate Itinerary'}
        </button>
      </form>
    </div>
  );
};

export default PlanTrip;
