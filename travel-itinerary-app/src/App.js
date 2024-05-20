import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PlanTrip from './components/PlanTrip';
import Itinerary from './components/Itinerary';

const App = () => {
  const [itinerary, setItinerary] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan-trip" element={<PlanTrip setItinerary={setItinerary} />} />
        <Route path="/itinerary" element={<Itinerary itinerary={itinerary} />} />
      </Routes>
    </Router>
  );
};

export default App;
