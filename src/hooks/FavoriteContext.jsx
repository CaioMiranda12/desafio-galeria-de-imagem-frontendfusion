import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext({})

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  const addFavorite = (item) => {
    if (!favorites.some(fav => fav.id === item.id)) {
      setFavorites([...favorites, item])
    }
  }

  const removeFavorite = (id) => {
    const filteredFavorite = favorites.filter(fav => fav.id !== id)

    setFavorites(filteredFavorite)
  }

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavorites = () => {
  const context = useContext(FavoritesContext)

  if (!context) {
    throw new Error('useFavorites deve ser usado dentro de um FavoritesProvider');
  }

  return context
}

FavoritesProvider.propTypes = {
  children: PropTypes.node
}