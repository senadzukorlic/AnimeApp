import { createContext, useState, useEffect } from "react"
import { AnimeApi, MangaApi } from "../API/Request"

export const AnimeData = createContext()

export function AnimeProvider({ children }) {
  const [animeData, setAnimeData] = useState([])
  const [mangaData, setMangaData] = useState([])

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const anime = await AnimeApi()
        const manga = await MangaApi()

        setAnimeData(anime)
        setMangaData(manga)

        console.log(`ANIME`, anime)
        console.log(`MANGA`, manga)
      } catch (error) {
        console.log(`Fecanje nije uspelo`, error)
      }
    }
    fetchAnimeData()
  }, [])

  return (
    <AnimeData.Provider value={{ animeData, mangaData }}>
      {children}
    </AnimeData.Provider>
  )
}
