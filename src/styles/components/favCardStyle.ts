import styled from 'styled-components';

const StyledCheckbox = styled.input`
  position: relative;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid ${({ theme }) => theme.primaryColor};
  border-radius: 4px;
  margin-right: 8px;
  position: relative;
  text-align: center;
  &:checked {
    border-color: ${({ theme }) => theme.primaryColor};
    background-color: ${({ theme }) => theme.primaryColor};
    &::before {
      content: '✔';
      color: white;
      width: 100%;
      top: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;

export { StyledCheckbox };
