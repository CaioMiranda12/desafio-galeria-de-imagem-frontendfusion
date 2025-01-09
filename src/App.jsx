import { useEffect } from "react";
import { Container } from "./components/container";
import { useState } from "react";
import { AuthorCard } from "./components/authorCard";

function App() {
  const [images, setImages] = useState([])
  const [filteredImage, setFilteredImage] = useState(null)
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

  const seenNames = [];

  return (
    <>
      <main className="w-full">
        {/* <div className="max-w-screen-xl mx-auto h-64 sm:h-96 p-2 sm:p-6 relative text-white">
          <h1 className="font-bold text-xl sm:text-2xl z-50 absolute">Beauty<span className="underline">Gallery</span></h1>

          <section className="bg-[url('./assets/Background-main.png')] absolute w-screen h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
            <h1 className="text-xl font-bold sm:text-3xl uppercase">BEAUTY GALLERY</h1>
            <p className="text-sm text-center text-gray-300 font-bold w-10/12 sm:w-7/12 sm:text-xl">Encontre o melhor em produtos, marcas, varejistas, expertise. Inspiração para arquitetura e design</p>
          </section>
        </div> */}

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
                // return <li key={image.id}>{image.author}</li>
                return (
                  <AuthorCard key={image.id} image={image} />
                )
              })

              }
            </div>
          </div>


        </Container>
      </main>
    </>
  );
}

export default App
