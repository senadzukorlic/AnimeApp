import { GenreCard } from "./GenreCard"
import { useContext } from "react"
import { AnimeData } from "../../Context/Anime"
export function Home() {
  const { anime, genres } = useContext(AnimeData)

  return (
    <>

    </>
  )
}
