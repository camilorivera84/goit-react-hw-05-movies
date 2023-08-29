import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink,
} from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Movies = lazy(() => import('./Movies'));
const MovieDetails = lazy(() => import('./MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

const App = () => {
  return (
    <Router>
      <div>
        <div className="navbar">
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/movies" activeClassName="active">
            Movies
          </NavLink>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movies" exact component={Movies} />
            <Route path="/movies/:movieId" exact component={MovieDetails} />
            <Route path="/movies/:movieId/cast" component={Cast} />
            <Route path="/movies/:movieId/reviews" component={Reviews} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
