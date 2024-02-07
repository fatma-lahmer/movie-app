import React from 'react';
import FavCard from './FavCard';
import { Movie } from '../../types/movie';
import { ListContainer, HeaderList } from '../../styles/components/listStyle';

interface FavListProps {
  favorites: Movie[];
  addToWatchList: (movie: Movie) => void;
  removeFromFavoritesList: (movie: Movie) => void;
  removeFromWatchList: (movie: Movie) => void;
  watchList: Movie[];
}

const FavList: React.FC<FavListProps> = ({
  favorites,
  addToWatchList,
  removeFromFavoritesList,
  removeFromWatchList,
  watchList,
}) => {
  return (
    <ListContainer>
      <HeaderList>Ma liste</HeaderList>
      {favorites.map((movie) => (
        <FavCard
          key={movie.id}
          movie={movie}
          onAddToWatchList={() => addToWatchList(movie)}
          onRemoveFromFavoritesList={() => removeFromFavoritesList(movie)}
          onRemoveFromWatchList={() => removeFromWatchList(movie)}
          isWachList={watchList.some((show) => show.id === movie.id)}
        />
      ))}
    </ListContainer>
  );
};

export default FavList;
