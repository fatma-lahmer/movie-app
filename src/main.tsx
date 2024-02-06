import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { GlobalStyle } from './styles/globalStyles.ts';
import { theme } from './styles/theme.ts';

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
        <GlobalStyle />
      </QueryClientProvider>
    </React.StrictMode>
  </ThemeProvider>,
);
