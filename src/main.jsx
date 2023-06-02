import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home'
import './assets/styles/global.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <openAllMaps />
    <Home />
  </React.StrictMode>,
)
