import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html {
  height: 100%;
}

#root {
  height: inherit;
}

body {
  box-sizing: border-box;
  margin: 0 auto;
  font-weight: 300;
  line-height: 1.1;
  color: ${({ theme }) => theme.secondaryColor};
  padding: 1rem;
  height: 100%;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size:${({ theme }) => theme.fontSize} ;
  background: ${({ theme }) => theme.backgroundColor};
}
`;
