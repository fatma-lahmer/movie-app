import styled from 'styled-components';

const ItemCardContainer = styled.div<{ isChosenMovieCard: boolean | undefined; isMovie: boolean }>`
  display: flex;
  width: 100%;
  max-height: 180px;
  border-bottom: 1px solid;
  margin-bottom: 1rem;
  overflow: hidden;
  padding: 0.5rem;
  justify-content: ${(props) => (props.isChosenMovieCard && props.isMovie ? 'flex-end' : 'center')};
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
`;

const ImageContainer = styled.div<{ image: string; isChosenMovieCard: boolean | undefined }>`
  width: 30%;
  max-width: ${(props) => (props.isChosenMovieCard ? '81px' : '61px')};
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const InfoContainer = styled.ul`
  width: 70%;
  padding: 1rem;
  list-style: none;
`;

const Description = styled.div`
  width: 100%;
  @media (max-width: 600px) {
    width: 110%;
  }
`;

const ActionContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ActionButton = styled.div`
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
    &:disabled {
      filter: grayscale(100%);
      cursor: not-allowed;
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
};
