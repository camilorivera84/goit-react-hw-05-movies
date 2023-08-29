import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { API_KEY } from './config';

const MovieDetails = () => {
  const { movieId } = useParams(); // Obtiene el movieId de los parámetros de la URL
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const { title, poster_path, overview, genres, user_score } = movieDetails;

  return (
    <div>
      <Link to="/movies">Go Back</Link>
      <h2>{title}</h2>
      <div className="movie-details-container">
        <div className="movie-details-image">
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={`${title} Poster`}
          />
        </div>
        <div className="movie-details-info">
          <h3>{title}</h3>
          <p>User Score: {user_score}</p>
          <p>Overview: {overview}</p>
          <p>Genres: {genres && genres.map(genre => genre.name).join(', ')}</p>
          <p>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link> |{' '}
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
