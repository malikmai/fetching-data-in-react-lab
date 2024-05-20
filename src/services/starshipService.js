const BASE_URL = 'https://swapi.dev/api/starships/';

export async function fetchStarships(query = '') {
  try {
    const url = query ? `${BASE_URL}?search=${encodeURIComponent(query)}` : BASE_URL;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
  }
};