import React from 'react';
import StarshipCard from './StarshipCard';

function StarshipList({ starships }) {
  return (
    <div class="StarshipList-Container">
      {starships.map(starship => <StarshipCard key={starship.url} starship={starship} />)} {/* Map over starships array and render StarshipCard component for each starship */}
    </div>
  );
}

export default StarshipList;