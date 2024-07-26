import { createContext, useState, useEffect } from "react";
import { AnimeApi, MangaApi } from "../API/Request";

export const AnimeData = createContext();

export function AnimeProvider({ children }) {
  const [animeData, setAnimeData] = useState([]);
  const [mangaData, setMangaData] = useState([]);

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const animeResponse = await AnimeApi();
        const mangaResponse = await MangaApi();

        if (animeResponse && mangaResponse) {
          setAnimeData(animeResponse.data);
          setMangaData(mangaResponse.data);
          console.log("ANIME Data:", animeResponse.data);
          console.log("MANGA Data:", mangaResponse.data);
        } else {
          console.log("API response is missing");
        }
      } catch (error) {
        console.log("Fetching data failed", error);
      }
    };

    fetchAnimeData();
  }, []);

  return (
    <AnimeData.Provider value={{ animeData, setAnimeData, mangaData }}>
      {children}
    </AnimeData.Provider>
  );
}
