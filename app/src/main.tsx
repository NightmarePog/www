import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { HelmetProvider } from 'react-helmet-async'
import '@fontsource-variable/archivo/index.css'
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/500.css'
import '@fontsource/ibm-plex-mono/600.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
)
