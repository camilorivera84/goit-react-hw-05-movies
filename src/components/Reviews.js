import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY } from './config';

const Reviews = ({ match }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(match.params.movieId);
  }, [match.params.movieId]);

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
