import styled from 'styled-components';
const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 8px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  font-size: 24px;
`;

export { SearchContainer, SearchInput, SearchIcon };
