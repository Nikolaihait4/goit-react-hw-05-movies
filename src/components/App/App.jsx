import Cast from 'components/Cast/Cast';
import Loader from 'components/Loader/Loader';
import Reviews from 'components/Reviews/Reviews';
import SharedLayout from 'components/SharedLayout/SharedLayout';
// import Home from 'pages/Home/Home';
// import MovieDetails from 'pages/MovieDetails/MovieDetails';
// import Movies from 'pages/Movies/Movies';

import React, { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
