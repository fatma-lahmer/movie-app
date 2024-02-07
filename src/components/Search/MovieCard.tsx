import React, { useEffect, useState } from 'react';
import ItemCard from './../ItemCard/ItemCard';
import { Movie } from '../../types/movie';

interface MovieCardProps {
  movie: Movie;
  onAddToFavorites: () => void;
  isFavorite: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onAddToFavorites, isFavorite }) => {
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    setDisabled(isFavorite);
  }, [isFavorite]);
  return (
    <ItemCard
      movie={movie}
      actionButton={
        <button onClick={onAddToFavorites} disabled={disabled}>
          Ajouter à ma liste
        </button>
      }
    />
  );
};

export default MovieCard;
