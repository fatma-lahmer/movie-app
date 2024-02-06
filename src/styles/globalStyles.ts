import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html, body, #root {
        height: 100%;
        margin: 0;
        padding: 0;
    }

    body {
        line-height: 1;
        font-family: ${({ theme }) => theme.fontFamily};
        background: ${({ theme }) => theme.backgroundColor};
        max-width: 100%;
        margin: 0 auto;
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    a, li {
        text-decoration: none;
        color: inherit;
    }
    h1 {
        margin: 0;
        text-align: center;
        padding: 1rem;
    }

`;
