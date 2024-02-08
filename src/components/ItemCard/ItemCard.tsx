import React from 'react';
import { Movie } from '../../types/movie';
import { formatRuntime } from '../../utils/formatTime';
import {
  ItemCardContainer,
  ContentContainer,
  ImageContainer,
  InfoContainer,
  ActionContainer,
  Description,
  ActionButton,
} from '../../styles/components/itemCardStyle';

interface ItemCardProps {
  movie: Movie;
  actionButton: React.ReactNode;
  showDescription?: boolean;
  titleStyle?: React.CSSProperties;
}

const ItemCard: React.FC<ItemCardProps> = ({
  movie,
  actionButton,
  showDescription,
  titleStyle,
}) => {
  const formattedRuntime = formatRuntime(movie?.averageRuntime);
  return (
    <ItemCardContainer isChosenMovieCard={showDescription} isMovie={movie ? true : false}>
      {movie && (
        <ContentContainer isChosenMovieCard={showDescription}>
          <ImageContainer image={movie.image} isChosenMovieCard={showDescription}></ImageContainer>
          <InfoContainer>
            <li style={{ ...titleStyle }}>{movie.title}</li>
            <li>{formattedRuntime}</li>
            <li>{movie.rating}</li>
            <li>{movie.year}</li>
            {showDescription && <Description dangerouslySetInnerHTML={{ __html: movie.summary }} />}
          </InfoContainer>
        </ContentContainer>
      )}
      <ActionContainer>
        <ActionButton>{actionButton}</ActionButton>
      </ActionContainer>
    </ItemCardContainer>
  );
};

export default ItemCard;
