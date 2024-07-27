import { AnimeData } from "../../Context/Anime"
import { useContext, useEffect } from "react"
import {
  ParentDiv,
  AnimeImg,
  DescriptionDiv,
  Title,
  DescriptionText,
  AddToFavorites,
} from "./AnimeDetailStyled"
import { Link } from "react-router-dom"

export function AnimeDetail() {
  const { detailAnime, favoriteAnime, setFavoriteAnime } = useContext(AnimeData)

  // useEffect(() => {
  //   return () => {
  //     clearDetailAnime()
  //   }
  // }, [clearDetailAnime])

  const addAnimeToFavorite = (item) => {
    const alreadyFavorite = favoriteAnime.some(
      (favorite) => favorite.id === item.id
    )
    if (!alreadyFavorite) {
      setFavoriteAnime([...favoriteAnime, item])
    }
  }

  return (
    <ParentDiv>
      {detailAnime.map((item) => (
        <>
          <AnimeImg src={item.attributes.posterImage.original} />
          <DescriptionDiv>
            <Title>{item.attributes.canonicalTitle}</Title>
            <DescriptionText>{item.attributes.description}</DescriptionText>
            <Link to="/favorites">
              <AddToFavorites onClick={() => addAnimeToFavorite(item)}>
                Add to favorites
              </AddToFavorites>
            </Link>
          </DescriptionDiv>
        </>
      ))}
    </ParentDiv>
  )
}
