import { GenreCard } from "./GenreCard"

import { Carousel } from "./Carousel"
import { ParentDiv, CardDiv } from "./HomeStyled"
import {
  fetchAdventureAnime,
  fetchHorrorAnime,
  fetchRomanceAnime,
} from "../../API/Request"
import { useEffect, useState } from "react"
export function Home() {
  const [adventure, setAdventure] = useState([])
  const [romance, setRomance] = useState([])
  const [horror, setHorror] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const adventureResponse = await fetchAdventureAnime()
      const romanceResponse = await fetchRomanceAnime()
      const horrorResponse = await fetchHorrorAnime()

      setAdventure(adventureResponse.data)
      setRomance(romanceResponse.data)
      setHorror(horrorResponse.data)
    }
    fetchData()
  }, [])

  return (
    <ParentDiv>
      <Carousel />
      <CardDiv>
        {adventure.map((item) => (
          <GenreCard
            key={item.id}
            animeManga={item.attributes.posterImage.original}
          />
        ))}
      </CardDiv>
      <CardDiv>
        {" "}
        {romance.map((item) => (
          <GenreCard
            key={item.id}
            animeManga={item.attributes.posterImage.original}
          />
        ))}
      </CardDiv>

      <CardDiv>
        {horror.map((item) => (
          <GenreCard
            key={item.id}
            animeManga={item.attributes.posterImage.original}
          />
        ))}
      </CardDiv>
    </ParentDiv>
  )
}
