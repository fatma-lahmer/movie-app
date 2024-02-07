import React, { useState } from 'react';
import ItemCard from './../ItemCard/ItemCard';
import { Movie } from '../../types/movie';

interface FavCardProps {
  movie: Movie;
  onAddToWatchList: () => void;
  onRemoveFromFavoritesList: () => void;
  onRemoveFromWatchList: () => void;
}

const FavCard: React.FC<FavCardProps> = ({
  movie,
  onAddToWatchList,
  onRemoveFromFavoritesList,
  onRemoveFromWatchList,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const onToggleWatchList = () => {
    const isMovieInWatchList = isChecked;

    if (isMovieInWatchList) {
      setIsChecked(false);
      onRemoveFromWatchList();
    } else {
      setIsChecked(true);
      onAddToWatchList();
    }
  };
  return (
    <ItemCard
      movie={movie}
      actionButton={
        <>
          {' '}
          <div>
            <label htmlFor="fav">Add to watch list</label>
            <input name="fav" type="checkbox" onChange={onToggleWatchList} checked={isChecked} />
          </div>
          <button onClick={onRemoveFromFavoritesList}>Supprimer de ma liste</button>
        </>
      }
    />
  );
};

export default FavCard;
