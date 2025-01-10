import PropTypes from "prop-types"
import { FaArrowCircleRight } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../../hooks/FavoriteContext";




export function ImageCard({ image }) {
  const { addFavorite } = useFavorites()

  const navigate = useNavigate()

  function handleFavoriteImage(item) {
    addFavorite(item)
    navigate('/favoritos')
  }

  return (
    <div className="flex flex-col p-4 bg-gray-200 rounded-lg">
      <div>
        <img alt={`imagem de ${image.author}`} src={image.download_url} className="rounded-lg h-40 sm:h-48 w-full object-cover hover:scale-105 duration-300 transition-all"
          onClick={() => navigate(`/info/${image.id}`)} />
      </div>

      <div className="flex justify-between pt-2">
        <button className="flex items-center gap-2 text-black font-bold text-sm sm:text-xl" onClick={() => navigate(`/info/${image.id}`)}>
          Visualizar
          <FaArrowCircleRight size={24} color='#000' />
        </button>

        <button onClick={() => handleFavoriteImage(image)} className="flex items-center gap-3">
          Favoritar
          <FaHeart size={24} color='#000' />
        </button>
      </div>
    </div>
  )
}

ImageCard.propTypes = {
  image: PropTypes.object
}