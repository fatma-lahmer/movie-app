import { useState } from 'react';
import { Movie } from '../../types/movie';

interface MovieListHook {
  movieList: Movie[];
  addToMovieList: (newMovie: Movie) => void;
  removeFromMovieList: (selectedMovie: Movie) => void;
}

const useMovieList = (): MovieListHook => {
  const [movieList, setMovieList] = useState<Movie[]>([]);

  const addToMovieList = (newMovie: Movie) => {
    if (!movieList.some((movie) => movie.id === newMovie.id)) {
      setMovieList((prevMovieList) => [...prevMovieList, newMovie]);
    }
  };

  const removeFromMovieList = (selectedMovie: Movie) => {
    setMovieList((prevMovieList) => prevMovieList.filter((el) => el.id !== selectedMovie.id));
  };

  return {
    movieList,
    addToMovieList,
    removeFromMovieList,
  };
};

export default useMovieList;
