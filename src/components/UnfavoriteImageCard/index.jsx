import PropTypes from "prop-types"
import { FaArrowCircleRight } from "react-icons/fa";

export function UnfavoriteImageCard({ image }) {

  return (
    <div className="flex flex-col p-4 bg-gray-200 rounded-lg cursor-pointer">
      <div>
        <img alt={`imagem de ${image.author}`} src={image.download_url} className="rounded-lg h-40 sm:h-48 w-full object-cover hover:scale-105 duration-300 transition-all" />
      </div>

      <div className="flex justify-between pt-2">
        <button className="flex items-center gap-2 text-black font-bold text-sm sm:text-xl">
          Desfavoritar
          <FaArrowCircleRight size={24} color='#000' />
        </button>
      </div>
    </div>
  )
}

UnfavoriteImageCard.propTypes = {
  image: PropTypes.object
}