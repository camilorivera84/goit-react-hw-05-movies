import React, { Suspense, lazy } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Movies = lazy(() => import('./Movies'));
const MovieDetails = lazy(() => import('./MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

const App = () => {
  return (
    <div>
      <div
        style={{
          marginLeft: '400px',
        }}
      >
        <NavLink to="/" exact activeClassName="active" className="ml-4">
          Home
        </NavLink>
        <NavLink to="/movies" activeClassName="active">
          Movies
        </NavLink>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <div className="container mt-4 mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Routes>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
