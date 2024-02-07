import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
const ListsContainer = styled.div`
  flex: 1;
  display: flex;
  height: 80%;
  width: 100%;
  overflow: hidden;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const ChosenMovieContainer = styled.div`
  display: flex;
  height: 20%;
  overflow: hidden;
`;

const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
  @media (max-width: 600px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
export { ListsContainer, AppContainer, ChosenMovieContainer, Separator };
