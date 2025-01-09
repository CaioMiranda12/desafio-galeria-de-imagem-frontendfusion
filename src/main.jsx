import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Header } from './components/header'
import { FavoritesProvider } from './hooks/FavoriteContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoritesProvider>
      <Header />
      <App />
    </FavoritesProvider>
  </React.StrictMode>,
)
