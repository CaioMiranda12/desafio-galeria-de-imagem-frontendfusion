import { Container, UnfavoriteImageCard } from '../../components'
import { useFavorites } from '../../hooks/FavoriteContext'

export function Favorite() {
  const { favorites } = useFavorites()

  return (
    <main className="w-full">
      <section className="bg-[url('./assets/Background-main.png')] h-64 sm:h-72 flex flex-col justify-center items-center">
        <h1 className="text-xl text-white font-bold sm:text-3xl uppercase">IMAGENS FAVORITAS</h1>
        <p className="text-sm text-center text-gray-300 font-bold w-10/12 sm:w-7/12 sm:text-xl">Encontre o melhor em produtos, marcas, varejistas, expertise. Inspiração para arquitetura e design</p>
      </section>

      <Container>
        <div>
          <h1 className='my-5 text-xl sm:text-3xl font-bold'>Suas imagens favoritas:</h1>

          <section className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7'>
            {favorites && favorites.length > 0 && (
              favorites.map(item => (
                <div key={item.id}>
                  <UnfavoriteImageCard image={item} />
                </div>
              ))
            )}
          </section>
        </div>
      </Container>
    </main>
  )
}