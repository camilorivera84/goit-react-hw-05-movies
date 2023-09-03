import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY } from './config';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams, useNavigate, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId);
    fetchCast(movieId);
    fetchReviews(movieId);
  }, [movieId]);

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
    navigate(`/movies/${movieId}/${section}`);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>
          <h2>Movie Details</h2>
          <h3>Title: {movie.title}</h3>

          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={`${movie.title} poster`}
            />
          )}
        </div>
        <div style={{ marginLeft: '20px' }}>
          <p>
            <strong>Overview:</strong> {movie.overview}
          </p>
          <p>
            <strong>Score:</strong> {movie.vote_average}
          </p>
          <p>
            <strong>Genres:</strong>{' '}
            {movie.genres && movie.genres.map(genre => genre.name).join(', ')}
          </p>
        </div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <button
          className="btn btn-primary ml-4"
          onClick={() => switchSection('cast')}
        >
          Show Cast
        </button>
        <button
          className="btn btn-primary"
          onClick={() => switchSection('reviews')}
        >
          Show Reviews
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
