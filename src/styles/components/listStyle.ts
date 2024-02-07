import styled from 'styled-components';

const ListContainer = styled.div`
  border: 1px solid;
  height: 100%;
  width: 50%;
  overflow: auto;
  padding: 1rem;

  @media (max-width: 600px) {
    width: 100%;
  }
`;
const HeaderList = styled.div`
  font-size: ${({ theme }) => theme.headerSize};
  width: 100%;
  border-bottom: 1px solid;
`;

export { HeaderList, ListContainer };
