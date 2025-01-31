import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import authApi from './services/authApi.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiProvider api={authApi}>
        <App />
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
