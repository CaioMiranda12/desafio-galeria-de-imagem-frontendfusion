import { Container, ImageCard } from '../../components'
import { useFavorites } from '../../hooks/FavoriteContext'

export function Favorite() {
  const { favorites } = useFavorites()
  console.log(favorites)


  return (
    <main className="w-full">
      <Container>
        <div>
          <h1 className='my-5 text-xl sm:text-3xl font-bold'>Suas imagens favoritas:</h1>

          <section className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7'>
            {favorites && favorites.length > 0 && (
              favorites.map(item => (
                <div key={item.id}>
                  <ImageCard image={item} />
                </div>
              ))
            )}
          </section>
        </div>
      </Container>
    </main>
  )
}