import PropTypes from "prop-types"
import { FaArrowCircleRight } from "react-icons/fa";




export function AuthorCard({ image }) {


  return (

    <div className="flex flex-col p-4 bg-gray-200 rounded-lg cursor-pointer">
      <div>
        <img alt={`imagem de ${image.author}`} src={image.download_url} className="rounded-lg h-24 sm:h-48 w-full object-cover hover:scale-105 duration-300 transition-all" />
      </div>

      <div className="flex justify-between pt-2">
        <p className="truncate">{image.author}</p>
        <button>
          <FaArrowCircleRight size={24} color='#000' />
        </button>
      </div>
    </div>

  )
}

AuthorCard.propTypes = {
  image: PropTypes.object
}