import useMovieList from './useMovieList';

export const useWatchList = () => {
  const { movieList, addToMovieList, removeFromMovieList } = useMovieList();

  return {
    watchList: movieList,
    addToWatchList: addToMovieList,
    removeFromWatchList: removeFromMovieList,
  };
};
