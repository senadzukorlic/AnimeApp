// import { GenreCard } from "./GenreCard"

// import { Carousel } from "./Carousel"
// import { ParentDiv, CardDiv } from "./HomeStyled"
// import {
//   fetchAdventureAnime,
//   fetchHorrorAnime,
//   fetchRomanceAnime,
//   fetchAdventureManga,
//   fetchActionManga,
// } from "../../API/Request"
// import { useEffect, useState } from "react"
// export function Home() {
//   const [adventure, setAdventure] = useState([])
//   const [romance, setRomance] = useState([])
//   const [horror, setHorror] = useState([])
//   const [adventureManga, setAdventureManga] = useState([])
//   const [actionManga, setActionManga] = useState([])

//   useEffect(() => {
//     const fetchData = async () => {
//       const adventureResponse = await fetchAdventureAnime()
//       const romanceResponse = await fetchRomanceAnime()
//       const horrorResponse = await fetchHorrorAnime()
//       const adventureMangaResponse = await fetchAdventureManga()
//       const actionMangaResponse = await fetchActionManga()

//       setAdventure(adventureResponse.data)
//       setRomance(romanceResponse.data)
//       setHorror(horrorResponse.data)
//       setAdventureManga(adventureMangaResponse.data)
//       setActionManga(actionMangaResponse.data)
//     }
//     fetchData()
//   }, [])

//   return (
//     <ParentDiv>
//       <Carousel />
//       <CardDiv>

//         {adventure.map((item) => (
//           <GenreCard
//             key={item.id}
//             animeManga={item.attributes.posterImage.original}
//           />
//         ))}
//       </CardDiv>
//       <CardDiv>
//         {" "}
//         {romance.map((item) => (
//           <GenreCard
//             key={item.id}
//             animeManga={item.attributes.posterImage.original}
//           />
//         ))}
//       </CardDiv>

//       <CardDiv>
//         {horror.map((item) => (
//           <GenreCard
//             key={item.id}
//             animeManga={item.attributes.posterImage.original}
//           />
//         ))}
//       </CardDiv>
//       <CardDiv>
//         {adventureManga.map((item) => (
//           <GenreCard
//             key={item.id}
//             animeManga={item.attributes.posterImage.original}
//           />
//         ))}
//       </CardDiv>
//       <CardDiv>
//         {actionManga.map((item) => (
//           <GenreCard
//             key={item.id}
//             animeManga={item.attributes.posterImage.original}
//           />
//         ))}
//       </CardDiv>
//     </ParentDiv>
//   )
// }

import { GenreCard } from "./GenreCard"
import { Carousel } from "./Carousel"
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
import { useEffect, useState } from "react"

export function Home() {
  const [adventure, setAdventure] = useState([])
  const [romance, setRomance] = useState([])
  const [horror, setHorror] = useState([])
  const [adventureManga, setAdventureManga] = useState([])
  const [actionManga, setActionManga] = useState([])

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

  return (
    <ParentDiv>
      <Carousel />
      <CardContainer>
        <GenreTitleDiv>
          <GenreTitle>Adventure</GenreTitle>
        </GenreTitleDiv>
        <div className="card-scroll">
          {adventure.map((item) => (
            <GenreCard
              key={item.id}
              animeManga={item.attributes.posterImage.original}
            />
          ))}
        </div>
      </CardContainer>
      <CardContainer>
        <GenreTitleDiv>
          <GenreTitle>Romance</GenreTitle>
        </GenreTitleDiv>
        <div className="card-scroll">
          {romance.map((item) => (
            <GenreCard
              key={item.id}
              animeManga={item.attributes.posterImage.original}
            />
          ))}
        </div>
      </CardContainer>
      <CardContainer>
        <GenreTitleDiv>
          <GenreTitle>Horror</GenreTitle>
        </GenreTitleDiv>
        <div className="card-scroll">
          {horror.map((item) => (
            <GenreCard
              key={item.id}
              animeManga={item.attributes.posterImage.original}
            />
          ))}
        </div>
      </CardContainer>
      <CardContainer>
        <GenreTitleDiv>
          <GenreTitle>Adventure Manga</GenreTitle>
        </GenreTitleDiv>
        <div className="card-scroll">
          {adventureManga.map((item) => (
            <GenreCard
              key={item.id}
              animeManga={item.attributes.posterImage.original}
            />
          ))}
        </div>
      </CardContainer>
      <CardContainer>
        <GenreTitleDiv>
          <GenreTitle>Action Manga</GenreTitle>
        </GenreTitleDiv>
        <div className="card-scroll">
          {actionManga.map((item) => (
            <GenreCard
              key={item.id}
              animeManga={item.attributes.posterImage.original}
            />
          ))}
        </div>
      </CardContainer>
    </ParentDiv>
  )
}
