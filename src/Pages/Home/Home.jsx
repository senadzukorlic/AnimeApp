import { GenreCard } from "./GenreCard"
import { useContext } from "react"
import { AnimeData } from "../../Context/Anime"
export function Home() {
  const { anime, genres } = useContext(AnimeData)

  return (
    <>
      <h1>Home</h1>
      {Array.isArray(anime) &&
        anime.map((item) => (
          <GenreCard
            key={item.id}
            genre="Adventure"
            animeManga={item.attributes.posterImage.original}
          />
        ))}
    </>
  )
}
