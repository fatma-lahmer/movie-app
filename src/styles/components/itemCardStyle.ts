import styled from 'styled-components';

const getJustifyContentForContainter = (props: {
  isChosenMovieCard?: boolean;
  isMovie: boolean;
}) => {
  if (!props.isChosenMovieCard) return 'space-between';
  if (props.isChosenMovieCard && props.isMovie) return 'flex-end';
  return 'center';
};

const ItemCardContainer = styled.div<{ isChosenMovieCard: boolean | undefined; isMovie: boolean }>`
  display: flex;
  width: 100%;
  max-height: 180px;
  border-bottom: 1px solid;
  overflow: hidden;
  padding: 0.5rem;
  justify-content: ${(props) => getJustifyContentForContainter(props)};
  align-items: center;
  flex-direction: ${(props) => (props.isChosenMovieCard ? 'row-reverse' : 'row')};
  @media (max-width: 600px) {
    flex-direction: ${(props) => (props.isChosenMovieCard ? 'column-reverse' : 'row')};
  }
`;

const ContentContainer = styled.div<{ isChosenMovieCard: boolean | undefined }>`
  display: flex;
  width: ${(props) => (props.isChosenMovieCard ? '100%' : '70%')};
  height: 100%;
  justify-content: ${(props) => (props.isChosenMovieCard ? 'flex-end' : 'flex-center')};
  position: relative;
  @media (max-width: 600px) {
    height: 80%;
    justify-content: ${(props) => (props.isChosenMovieCard ? 'flex-start' : 'flex-center')};
    margin-top: ${(props) => (props.isChosenMovieCard ? '7px' : '0')};
  }
`;

const ImageContainer = styled.div<{ image: string; isChosenMovieCard: boolean | undefined }>`
  width: 30%;
  max-width: ${(props) => (props.isChosenMovieCard ? '108px' : '61px')};
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const InfoContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 1rem;
  list-style: none;
  overflow: auto;
`;

const Description = styled.li`
  width: 100%;
  padding: 0.5rem 0;
`;
const Title = styled.li<{ isChosenMovieCard: boolean | undefined }>`
  font-size: ${(props) =>
    props.isChosenMovieCard ? props.theme.headerSize : props.theme.fontSize};
`;

const ActionContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ActionButton = styled.div<{ isChosenMovieCard: boolean | undefined; isMovie: boolean }>`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    padding: 0.5rem;
    background-color: ${({ theme }) => theme.primaryColor};
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transform: ${(props) =>
      props.isChosenMovieCard && props.isMovie ? 'translateX(100%)' : 'translateX(0)'};
    &:disabled {
      filter: grayscale(100%);
      cursor: not-allowed;
    }
    @media (max-width: 600px) {
      transform: translateX(0);
    }
  }
`;

export {
  ItemCardContainer,
  ContentContainer,
  ImageContainer,
  InfoContainer,
  Description,
  ActionContainer,
  ActionButton,
  Title,
};
