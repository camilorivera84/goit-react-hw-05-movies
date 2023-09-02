import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY } from './config';
import Cast from './Cast';
import Reviews from './Reviews';
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieDetails = ({ match, history }) => {
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    fetchMovieDetails(match.params.movieId);
    fetchCast(match.params.movieId);
    fetchReviews(match.params.movieId);
  }, [match.params.movieId]);

  const fetchMovieDetails = async movieId => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
      );
      setMovie(response.data);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

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

  const fetchReviews = async movieId => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
      );
      setReviews(response.data.results);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const switchSection = section => {
    setActiveSection(section);
    history.push(`/movies/${match.params.movieId}/${section}`);
  };

  return (
    <div>
      <h2>Movie Details</h2>
      <h3>Title: {movie.title}</h3>

      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={`${movie.title} poster`}
        />
      )}
      <p>Overview: {movie.overview}</p>
      <p>Score: {movie.vote_average}</p>
      <p>
        Genres:{' '}
        {movie.genres && movie.genres.map(genre => genre.name).join(', ')}
      </p>

      <button
        className="btn btn-primary ml-4"
        onClick={() => switchSection('Cast')}
      >
        Show Cast
      </button>
      <button
        className="btn btn-primary"
        onClick={() => switchSection('Reviews')}
      >
        Show Reviews
      </button>

      {activeSection === 'Cast' && <Cast cast={cast} />}
      {activeSection === 'Reviews' && <Reviews reviews={reviews} />}
    </div>
  );
};

export default MovieDetails;
