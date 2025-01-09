import PropTypes from 'prop-types';
import { createContext, useContext, useEffect, useState } from 'react';

const FAVORITES_STORAGE_KEY = 'favorites';

const FavoritesContext = createContext({})

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  const saveOnLocalStorage = (item) => {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(item))
  }

  useEffect(() => {
    const storedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY)

    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites))
    }
  }, [])

  const addFavorite = (item) => {
    if (!favorites.some(fav => fav.id === item.id)) {

      const updatedFavorites = [...favorites, item]

      setFavorites(updatedFavorites)
      saveOnLocalStorage(updatedFavorites)
    }
  }

  const removeFavorite = (id) => {
    const filteredFavorite = favorites.filter(fav => fav.id !== id)

    setFavorites(filteredFavorite)
    saveOnLocalStorage(filteredFavorite)
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