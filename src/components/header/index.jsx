import { Link } from "react-router-dom";
import { useFavorites } from "../../hooks/FavoriteContext"
import { FaHeart } from "react-icons/fa";


export function Header() {
  const { favorites } = useFavorites()

  return (
    <header className="max-w-screen-xl mx-auto h-16 flex justify-between items-center px-2">
      <div className="flex gap-3 items-center">
        <Link to='/'>
          <h1 className="text-black text-2xl sm:text-3xl font-bold">Beauty Gallery</h1>
        </Link>

        <nav className="flex items-center gap-2">
          <Link to='/' className="sm:text-xl">
            <h1 className="sm:text-xl hover:text-orange-400 hover:font-bold">Inicio</h1>
          </Link>

          <Link to='/favoritos' className="sm:text-xl hover:text-orange-400 hover:font-bold">
            <h1 className="">Favoritos</h1>
          </Link>
        </nav>
      </div>


      <Link to='/favoritos' className="flex gap-3 items-center sm:text-xl font-bold">
        {favorites.length}
        <FaHeart className="w-6 h-6 sm:w-8 sm:h-8" color="#000" />
      </Link>
    </header>
  )
}