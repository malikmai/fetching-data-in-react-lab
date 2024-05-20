import React, { useState, useEffect } from 'react';
import StarshipList from './components/StarshipList';
import StarshipSearch from './components/StarshipSearch'; 
import { fetchStarships } from './services/starshipService'; // Import fetchStarships function from services/starshipService

function App() {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state; learned from https://www.robinwieruch.de/react-fetching-data

  useEffect(() => {
    fetchStarships().then(data => {
      if (data && data.results) { // Add conditional to check if data.results exists before setting starships state
        setStarships(data.results);
        setLoading(false); // Set loading to false after fetching data
      }
    });
  }, []); // Add empty array as second argument to useEffect

  function handleSearch(query) {
    setLoading(true);
    fetchStarships(query).then(data => {
      if (data && data.results) {
        setStarships(data.results);
        setLoading(false);
      }
    });
  }

  if (loading) return <div>Loading the Fleet...</div>; // adds a loading message while fetching data

  return (
    <main>
      <header>
        <h1>Star Wars API</h1>
        <StarshipSearch onSearch={handleSearch} />
      </header>
      <hr />
      <h3>Starships in your Fleet ({starships.length})</h3>
      <StarshipList starships={starships} />
    </main>
  );
}

export default App;
