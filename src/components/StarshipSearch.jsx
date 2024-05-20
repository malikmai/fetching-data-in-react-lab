import React, { useState } from 'react';

function StarshipSearch({ onSearch }) {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={handleChange} placeholder="Search Starships" />
      <button type="submit">Search</button>
    </form>
  );
}

export default StarshipSearch;