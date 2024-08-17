import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {APIProvider, Map, useMap} from '@vis.gl/react-google-maps';
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <APIProvider apiKey={API_KEY}>
      <App />
    </APIProvider>
  </StrictMode>,
)
