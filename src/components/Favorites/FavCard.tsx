import React, { useState } from 'react';
import ItemCard from './../ItemCard/ItemCard';
import { Movie } from '../../types/movie';
import { StyledCheckbox } from '../../styles/components/favCardStyle';

interface FavCardProps {
  movie: Movie;
  onAddToWatchList: () => void;
  onRemoveFromFavoritesList: () => void;
  onRemoveFromWatchList: () => void;
  isWachList: boolean;
}

const FavCard: React.FC<FavCardProps> = ({
  movie,
  onAddToWatchList,
  onRemoveFromFavoritesList,
  onRemoveFromWatchList,
  isWachList,
}) => {
  const [isChecked, setIsChecked] = useState(isWachList);
  const onToggleWatchList = () => {
    if (isChecked) {
      setIsChecked(!isChecked);
      onRemoveFromWatchList();
    } else {
      setIsChecked(!isChecked);
      onAddToWatchList();
    }
  };
  return (
    <ItemCard
      movie={movie}
      actionButton={
        <>
          <StyledCheckbox
            name="fav"
            type="checkbox"
            onChange={onToggleWatchList}
            checked={isChecked}
          />

          <button onClick={onRemoveFromFavoritesList}>Supprimer de ma liste</button>
        </>
      }
    />
  );
};

export default FavCard;
