import { useEffect } from "react";
import { AuthorCard, Container, Gallery } from '../components'
import { useState } from "react";


export function Home() {
  const [images, setImages] = useState([])
  const [filteredImages, setFilteredImages] = useState(null)
  const [authorFilter, setAuthorFilter] = useState('')


  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await fetch('https://picsum.photos/v2/list')
        const data = await res.json()

        setImages(data)

      } catch (err) {
        console.error('Erro ao buscar as imagens');
      }
    }

    fetchImages();
  }, [])

  useEffect(() => {
    if (authorFilter) {
      const authorImages = images.filter(item => item.author === authorFilter)
      setFilteredImages(authorImages)
    } else {
      setFilteredImages(images)
    }

  }, [authorFilter, images])

  const seenNames = [];

  function handleAuthorClick(image) {
    setAuthorFilter(image.author)
  }

  return (
    <>
      <main className="w-full">
        <section className="bg-[url('./assets/Background-main.png')] h-64 sm:h-72 flex flex-col justify-center items-center">
          <h1 className="text-xl text-white font-bold sm:text-3xl uppercase">BEAUTY GALLERY</h1>
          <p className="text-sm text-center text-gray-300 font-bold w-10/12 sm:w-7/12 sm:text-xl">Encontre o melhor em produtos, marcas, varejistas, expertise. Inspiração para arquitetura e design</p>
        </section>
      </main>

      <Container>
        <div>

          <div className="flex justify-center mt-6">
            <h2 className="text-xl font-bold uppercase sm:text-3xl mb-5">AUTOR</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
            {images.map(image => {
              if (seenNames.includes(image.author)) {
                return null;
              }

              seenNames.push(image.author)

              return (
                <div key={image.id} onClick={() => handleAuthorClick(image)}>
                  <AuthorCard image={image} />
                </div>
              )
            })

            }
          </div>

          <Gallery images={filteredImages} />

        </div>
      </Container>

    </>
  );
}

