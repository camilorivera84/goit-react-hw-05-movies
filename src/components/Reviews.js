import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY } from './config';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams(); // Obtén el valor de movieId desde el contexto de enrutamiento
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(movieId);
  }, [movieId]);

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

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>{review.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
