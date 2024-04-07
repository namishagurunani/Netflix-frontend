const baseurl = "https://netflix-backend-1-asqx.onrender.com";
export const API_END_POINT = `${baseurl}/api/v1/user`;

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxN2FiODBiNmNkODIxODA0MGQzZjI1ZTQwZDRlY2IwMCIsInN1YiI6IjY2MGYwODFmOWRlZTU4MDE3ZDBhZWM0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hQ2ec9ygukIpCMlkfexK0Hf6r--BBz09tD9rsT5tivU'
  }
};
export const Now_Playing_Movie = "https://api.themoviedb.org/3/movie/now_playing";
export const Popular_Movie = "https://api.themoviedb.org/3/movie/popular";
export const Top_Rated_Movie = "https://api.themoviedb.org/3/movie/top_rated";
export const Upcoming_Movie = "https://api.themoviedb.org/3/movie/upcoming";

export const  SEARCH_MOVIE_URL="https://api.themoviedb.org/3/search/movie?query=";

export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500";