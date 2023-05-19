import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { MantineProvider } from '@mantine/core';
import Router from './Router'
import './styles/index.css'
import ErrorBoundary from './Components/Error/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <Router />
        </MantineProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>,
)
