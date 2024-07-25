import { GenreCard } from "./GenreCard"
import { useContext } from "react"
import { AnimeData } from "../../Context/Anime"
export function Home() {
  const { animeData, mangaData } = useContext(AnimeData)

  return (
    <>
      <h1>Home</h1>
    </>
  )
}
