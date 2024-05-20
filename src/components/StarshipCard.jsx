import React from 'react';

function StarshipCard({ starship }) {
  return (
    <main>
    <div class="StarshipCard-Container">
      <h4>Name: {starship.name}</h4>
      <p>Class: {starship.starship_class}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
      <p>Model: {starship.model}</p>
    </div>
    </main>
  );
}

export default StarshipCard;