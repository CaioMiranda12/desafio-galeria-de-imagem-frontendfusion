import PropTypes from "prop-types"
import { ImageCard } from '../imageCard'
import { useFavorites } from '../../hooks/FavoriteContext'
import { useNavigate } from "react-router-dom"


export function Gallery({ images }) {
  const { addFavorite } = useFavorites()

  const navigate = useNavigate()

  function handleFavoriteImage(item) {
    addFavorite(item)
    navigate('/favoritos')
  }

  return (
    <section>
      <div className="flex justify-center mt-6">
        <h2 className="text-xl font-bold uppercase sm:text-3xl my-10">GALERIA</h2>
      </div>

      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-7">
        {images && images.map(item => (
          <div key={item.id} onClick={() => handleFavoriteImage(item)}>
            <ImageCard image={item} />
          </div>
        ))}
      </section>
    </section>
  )
}

Gallery.propTypes = {
  images: PropTypes.array
}