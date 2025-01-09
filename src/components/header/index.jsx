import { Link } from "react-router-dom";
import { useFavorites } from "../../hooks/FavoriteContext"
import { FaHeart } from "react-icons/fa";


export function Header() {
  const { favorites } = useFavorites()
  console.log(favorites)

  return (
    <header className="max-w-screen-xl mx-auto h-16 flex items-center px-2">
      <h1 className="text-black text-2xl sm:text-3xl font-bold">Beauty Gallery</h1>

      <Link to='/'>
        <FaHeart size={24} color="#000" />
      </Link>
    </header>
  )
}