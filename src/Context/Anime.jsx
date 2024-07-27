import { createContext, useState, useEffect } from "react"
import { AnimeApi } from "../API/Request"

export const AnimeData = createContext()

export function AnimeProvider({ children }) {
  const [anime, setAnimeData] = useState([])
  const [detailAnime, setDetailAnime] = useState([])

  const clearDetailAnime = () => {
    setDetailAnime([])
  }

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const AnimE = await AnimeApi()

        setAnimeData(AnimE.data)

        console.log(`ANIME`, AnimE.data)
      } catch (error) {
        console.log(`Fecanje nije uspelo`, error)
      }
    }
    fetchAnimeData()
  }, [])

  return (
    <AnimeData.Provider
      value={{ anime, detailAnime, setDetailAnime, clearDetailAnime }}
    >
      {children}
    </AnimeData.Provider>
  )
}
