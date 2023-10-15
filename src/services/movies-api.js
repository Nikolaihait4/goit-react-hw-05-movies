import axios from 'axios';

const options = {
  params: {
    api_key: '225604b28f9482ca934e66e51d9f7ec9',
    language: 'en-US',
  },
};

axios.defaults.baseURL = `https://api.themoviedb.org/3`;

// Trendy-Film
export async function getTrendingMovies(signal) {
  const response = await axios.get('/trending/movie/day', {
    ...options,
    signal,
  });
  return response.data.results;
}

// Page Movies
export async function getMovies(query, signal, page) {
  const response = await axios.get(
    `/search/movie?query=${query}&include_adult=false&page=${page}`,
    {
      ...options,
      signal,
    }
  );
  return response.data;
}

// More-Details
export async function getMovieDetails(movieId, signal) {
  const response = await axios.get(`/movie/${movieId}`, {
    ...options,
    signal,
  });
  return response.data;
}

// Movie-Cast
export async function getMovieCast(movieId, signal) {
  const response = await axios.get(`/movie/${movieId}/credits`, {
    ...options,
    signal,
  });
  return response.data.cast;
}

// Movie-Review
export async function getMovieReviews(movieId, signal) {
  const response = await axios.get(`movie/${movieId}/reviews?page=1`, {
    ...options,
    signal,
  });
  return response.data.results;
}
