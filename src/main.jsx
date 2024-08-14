import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {APIProvider, Map, useMap} from '@vis.gl/react-google-maps';
import App from './App.jsx'
const API_KEY = 'AIzaSyBaBDb3m04XYJzVVZCAm_UWwU63X5gb_Oc'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <APIProvider apiKey={API_KEY}>
      <App />
    </APIProvider>
  </StrictMode>,
)
