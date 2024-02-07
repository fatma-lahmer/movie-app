import styled from 'styled-components';

const ItemCardContainer = styled.div`
  display: flex;
  width: 100%;
  max-height: 150px;
  border-bottom: 1px solid;
  margin-bottom: 1rem;
  overflow: hidden;
  padding: 0.5rem;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 70%;
`;

const ImageContainer = styled.div<{ image: string }>`
  width: 15%;
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 600px) {
    width: 30%;
  }
`;

const InfoContainer = styled.ul`
  width: 70%;
  padding: 1rem;
  list-style: none;
`;

const Description = styled.div`
  margin-top: 1rem;
`;

const ActionContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ActionButton = styled.div`
  button {
    padding: 0.5rem;
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.textBtn};
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
