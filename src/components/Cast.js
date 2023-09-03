import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY } from './config';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCast(movieId);
  }, [movieId]);

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
      <ul className="list-group">
        {cast.map(actor => (
          <li key={actor.id} className="list-group-item">
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={`${actor.name} profile`}
              style={{ marginRight: '10px' }}
            />
            <div>
              <strong>Name:</strong> {actor.name}
            </div>
            <div>
              <strong>Character:</strong> {actor.character}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
