import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY } from './config';

const Cast = ({ match }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCast(match.params.movieId);
  }, [match.params.movieId]);

  const fetchCast = async movieId => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
      );
      setCast(response.data.cast);
    } catch (error) {
      console.error('Error fetching cast:', error);
    }
  };

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
