// import { createContext, useState, useEffect } from "react"
// import { AnimeApi, MangaApi } from "../API/Request"

// export const AnimeData = createContext()

// export function AnimeProvider({ children }) {
//   const [anime, setAnimeData] = useState([])
//   const [manga, setMangaData] = useState([])

//   useEffect(() => {
//     const fetchAnimeData = async () => {
//       try {
//         const AnimE = await AnimeApi()
//         const MangA = await MangaApi()

//         setAnimeData(AnimE.data)
//         setMangaData(MangA)

//         console.log(`ANIME`, AnimE.data)
//         console.log(`MANGA`, MangA)
//       } catch (error) {
//         console.log(`Fecanje nije uspelo`, error)
//       }
//     }
//     fetchAnimeData()
//   }, [])

//   return (
//     <AnimeData.Provider value={{ anime, manga }}>{children}</AnimeData.Provider>
//   )
// }

import { createContext, useState, useEffect } from "react"
import axios from "axios"
import { fetchAnimeGenres } from "../API/Request"

export const AnimeData = createContext()

export function AnimeProvider({ children }) {
  const [anime, setAnime] = useState([])
  const [genres, setGenres] = useState({})

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const animeResponse = await AnimeApi()
        const animeList = animeResponse.data
        setAnime(animeList)

        // Paralelno povlačenje žanrova za svaki anime
        const genrePromises = animeList.map((animeItem) =>
          fetchAnimeGenres(animeItem.id)
        )

        const genreResults = await Promise.all(genrePromises)

        // Mapiranje rezultata žanrova na anime ID
        const genreMap = animeList.filter((animeItem, index) =>
          genreResults[index].some(
            (genre) => genre.attributes.name === "Adventure"
          )
        )

        setGenres(genreMap)
      } catch (error) {
        console.error("Fetchanje podataka nije uspelo", error)
      }
    }

    fetchAnimeData()
  }, [])

  return (
    <AnimeData.Provider value={{ anime, genres }}>
      {children}
    </AnimeData.Provider>
  )
}

export async function AnimeApi() {
  try {
    const response = await axios.get("https://kitsu.io/api/edge/anime", {
      headers: {
        Accept: "application/vnd.api+json",
      },
    })
    return response.data
  } catch (error) {
    console.error("Fetchanje anime podataka nije uspelo", error)
  }
}
