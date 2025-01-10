import { useNavigate, useParams } from "react-router-dom"

import { Container } from '../../components/container'
import { useEffect, useState } from "react"

export function Info() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [image, setImage] = useState({})

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(`https://picsum.photos/id/${id}/info`)

        if (!res.ok) {
          navigate('/')
        }

        const data = await res.json()
        setImage(data)

      } catch (err) {
        navigate('/')
      }
    }

    getData()
  }, [id, navigate])

  console.log(image)

  return (
    <main className="mt-4">
      <Container>
        <div>
          <img alt={`Imagem de ${image.author}`} src={image.download_url}
            className="h-72 sm:h-96 w-full object-cover rounded-lg"
          />

          <div className="mt-6 flex flex-col gap-5">
            <p>Autor: <strong>{image.author}</strong></p>
            <p>Largura: <strong>{image.width}</strong></p>
            <p>Altura: <strong>{image.height}</strong></p>
            <p
            >URL da imagem:{' '}
              <a href={`${image.url}`} target="_blank" className="font-bold truncate">
                {image.url}
              </a>
            </p>
            <p>
              Download URL:{' '}
              <a href={`${image.download_url}`} target="_blank" className="font-bold truncate">
                {image.download_url}
              </a>
            </p>
          </div>
        </div>
      </Container>
    </main>
  )
}