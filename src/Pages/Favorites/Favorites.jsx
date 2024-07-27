import { AnimeData } from "../../Context/Anime"
import { useContext } from "react"

export function Favorites() {
  const { favoriteAnime } = useContext(AnimeData)

  return (
    <>
      {favoriteAnime.map((item) => (
        <img src={item.attributes.posterImage.original} />
      ))}
    </>
  )
}
