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
  Title,
} from '../../styles/components/itemCardStyle';

interface ItemCardProps {
  movie: Movie;
  actionButton: React.ReactNode;
  showDescription?: boolean;
  titleStyle?: React.CSSProperties;
}

const ItemCard: React.FC<ItemCardProps> = ({ movie, actionButton, showDescription }) => {
  const formattedRuntime = formatRuntime(movie?.averageRuntime);
  return (
    <ItemCardContainer isChosenMovieCard={showDescription} isMovie={movie ? true : false}>
      {movie && (
        <ContentContainer isChosenMovieCard={showDescription}>
          <ImageContainer image={movie.image} isChosenMovieCard={showDescription}></ImageContainer>
          <InfoContainer>
            <Title isChosenMovieCard={showDescription}>{movie.title}</Title>
            <li>{formattedRuntime}</li>
            <li>{movie.rating}</li>
            <li>{movie.year}</li>
            {showDescription && <Description dangerouslySetInnerHTML={{ __html: movie.summary }} />}
          </InfoContainer>
        </ContentContainer>
      )}
      <ActionContainer>
        <ActionButton isChosenMovieCard={showDescription} isMovie={movie ? true : false}>
          {actionButton}
        </ActionButton>
      </ActionContainer>
    </ItemCardContainer>
  );
};

export default ItemCard;
