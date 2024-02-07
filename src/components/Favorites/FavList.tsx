import React from 'react';
import FavCard from './FavCard';
import { Movie } from '../../types/movie';
import { ListContainer, HeaderList } from '../../styles/components/listStyle';

interface FavListProps {
  favorites: Movie[];
  addToWatchList: (movie: Movie) => void;
  removeFromFavoritesList: (movie: Movie) => void;
  removeFromWatchList: (movie: Movie) => void;
}

const FavList: React.FC<FavListProps> = ({
  favorites,
  addToWatchList,
  removeFromFavoritesList,
  removeFromWatchList,
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
        />
      ))}
    </ListContainer>
  );
};

export default FavList;
