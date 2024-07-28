import { AnimeData } from "../../Context/Anime"
import { useContext } from "react"
import {
  ParentDiv,
  AnimeImg,
  DescriptionDiv,
  Title,
  DescriptionText,
  AddToFavorites,
} from "./RemoFromFavoritesStyled"
import { Link, useLocation } from "react-router-dom"

const removeAnimeFromFavorite = (item, favoriteAnime, setFavoriteAnime) => {
  const updatedFavorites = favoriteAnime.filter(
    (favorite) => favorite.id !== item.id
  )
  setFavoriteAnime(updatedFavorites)
}

export function RemoveFromFavorites() {
  const { favoriteAnime, setFavoriteAnime } = useContext(AnimeData)
  const location = useLocation()
  const { anime } = location.state || {}

  return (
    <ParentDiv>
      {anime ? (
        <>
          <AnimeImg src={anime.attributes.posterImage.original} />
          <DescriptionDiv>
            <Title>{anime.attributes.canonicalTitle}</Title>
            <DescriptionText>{anime.attributes.description}</DescriptionText>
            <Link to="/favorites">
              <AddToFavorites
                onClick={() =>
                  removeAnimeFromFavorite(
                    anime,
                    favoriteAnime,
                    setFavoriteAnime
                  )
                }
              >
                Remove from favorites
              </AddToFavorites>
            </Link>
          </DescriptionDiv>
        </>
      ) : (
        <p>No anime selected</p>
      )}
    </ParentDiv>
  )
}
