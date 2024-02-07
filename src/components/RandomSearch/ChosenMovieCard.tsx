import React, { useEffect, useState } from 'react';
import useRandomChoose from '../../hooks/useRandomChoose';
import ItemCard from '../ItemCard/ItemCard';
import Spinner from '../Spinner/Spinner';
import { Movie } from '../../types/movie';

interface ChosenMovieCardProps {
  watchList: Movie[];
}

const ChosenMovieCard: React.FC<ChosenMovieCardProps> = ({ watchList }) => {
  const { randomMovie, chooseRandomMovie } = useRandomChoose(watchList);
  const [loading, setLoading] = useState(false);

  const handleChooseRandom = () => {
    setLoading(true);
    chooseRandomMovie();
  };

  useEffect(() => {
    if (randomMovie || !watchList.length) {
      setLoading(false);
    }
  }, [randomMovie, watchList.length, loading]);

  return loading ? (
    <Spinner />
  ) : (
    <ItemCard
      movie={randomMovie}
      showDescription={true}
      actionButton={
        <button onClick={handleChooseRandom} disabled={!watchList.length}>
          Je vais regarder quoi ce soir ?
        </button>
      }
    />
  );
};

export default ChosenMovieCard;
