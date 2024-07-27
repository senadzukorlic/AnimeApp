import { GenreCard } from "./GenreCard"
import { Carousel } from "./Carousel"
import { Link } from "react-router-dom"
import { AnimeData } from "../../Context/Anime"
import {
  ParentDiv,
  CardContainer,
  GenreTitleDiv,
  GenreTitle,
} from "./HomeStyled"
import {
  fetchAdventureAnime,
  fetchHorrorAnime,
  fetchRomanceAnime,
  fetchAdventureManga,
  fetchActionManga,
} from "../../API/Request"
import { useContext, useEffect, useState } from "react"

export function Home() {
  const [adventure, setAdventure] = useState([])
  const [romance, setRomance] = useState([])
  const [horror, setHorror] = useState([])
  const [adventureManga, setAdventureManga] = useState([])
  const [actionManga, setActionManga] = useState([])
  const { detailAnime, setDetailAnime } = useContext(AnimeData)

  useEffect(() => {
    const fetchData = async () => {
      const adventureResponse = await fetchAdventureAnime()
      const romanceResponse = await fetchRomanceAnime()
      const horrorResponse = await fetchHorrorAnime()
      const adventureMangaResponse = await fetchAdventureManga()
      const actionMangaResponse = await fetchActionManga()

      setAdventure(adventureResponse.data)
      setRomance(romanceResponse.data)
      setHorror(horrorResponse.data)
      setAdventureManga(adventureMangaResponse.data)
      setActionManga(actionMangaResponse.data)
    }
    fetchData()
  }, [])

  const addToFavorite = (item) => {
    const alreadyFavorite = detailAnime.some(
      (favorite) => favorite.id === item.id
    )
    if (!alreadyFavorite) {
      setDetailAnime([...detailAnime, item])
    }
  }

  return (
    <ParentDiv>
      <Carousel />
      <CardContainer>
        <GenreTitleDiv>
          <GenreTitle>Adventure</GenreTitle>
        </GenreTitleDiv>
        <div className="card-scroll">
          {adventure.map((item) => (
            <div onClick={() => addToFavorite(item)}>
              <Link to="/anime-detail" style={{ textDecoration: "none" }}>
                <GenreCard
                  key={item.id}
                  animeManga={item.attributes.posterImage.original}
                />
              </Link>
            </div>
          ))}
        </div>
      </CardContainer>
      <CardContainer>
        <GenreTitleDiv>
          <GenreTitle>Romance</GenreTitle>
        </GenreTitleDiv>
        <div className="card-scroll">
          {romance.map((item) => (
            <div onClick={() => addToFavorite(item)}>
              <Link to="/anime-detail" style={{ textDecoration: "none" }}>
                <GenreCard
                  key={item.id}
                  animeManga={item.attributes.posterImage.original}
                />
              </Link>
            </div>
          ))}
        </div>
      </CardContainer>
      <CardContainer>
        <GenreTitleDiv>
          <GenreTitle>Horror</GenreTitle>
        </GenreTitleDiv>
        <div className="card-scroll">
          {horror.map((item) => (
            <div onClick={() => addToFavorite(item)}>
              <Link to="/anime-detail" style={{ textDecoration: "none" }}>
                <GenreCard
                  key={item.id}
                  animeManga={item.attributes.posterImage.original}
                />
              </Link>
            </div>
          ))}
        </div>
      </CardContainer>
      <CardContainer>
        <GenreTitleDiv>
          <GenreTitle>Adventure Manga</GenreTitle>
        </GenreTitleDiv>
        <div className="card-scroll">
          {adventureManga.map((item) => (
            <div onClick={() => addToFavorite(item)}>
              <Link to="/anime-detail" style={{ textDecoration: "none" }}>
                <GenreCard
                  key={item.id}
                  animeManga={item.attributes.posterImage.original}
                />
              </Link>
            </div>
          ))}
        </div>
      </CardContainer>
      <CardContainer>
        <GenreTitleDiv>
          <GenreTitle>Action Manga</GenreTitle>
        </GenreTitleDiv>
        <div className="card-scroll">
          {actionManga.map((item) => (
            <div onClick={() => addToFavorite(item)}>
              <Link to="/anime-detail" style={{ textDecoration: "none" }}>
                <GenreCard
                  key={item.id}
                  animeManga={item.attributes.posterImage.original}
                />
              </Link>
            </div>
          ))}
        </div>
      </CardContainer>
    </ParentDiv>
  )
}
