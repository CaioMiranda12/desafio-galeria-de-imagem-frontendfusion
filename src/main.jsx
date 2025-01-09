import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { FavoritesProvider } from './hooks/FavoriteContext.jsx'
import AppRoutes from './routes/routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoritesProvider>
      <AppRoutes />
    </FavoritesProvider>
  </React.StrictMode>,
)
