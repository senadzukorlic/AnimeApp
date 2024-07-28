import React from "react"
import { AnimeData } from "../../Context/Anime"
import { useContext } from "react"
import {
  AnimeGalleryContainer,
  AnimeGalleryTitle,
  AnimeImagesContainer,
  AnimeCard,
  AnimeImage,
} from "./FavoritesStyled"
import { useNavigate } from "react-router-dom"

export function Favorites() {
  const { favoriteAnime } = useContext(AnimeData)
  const navigate = useNavigate()

  const handleAnimeClick = (item) => {
    navigate("/remove-favorites", { state: { anime: item } })
  }

  return (
    <AnimeGalleryContainer>
      <AnimeGalleryTitle>Anime</AnimeGalleryTitle>
      <AnimeImagesContainer>
        {favoriteAnime.map((item) => (
          <div key={item.id} onClick={() => handleAnimeClick(item)}>
            <AnimeCard>
              <AnimeImage src={item.attributes.posterImage.original} />
            </AnimeCard>
          </div>
        ))}
      </AnimeImagesContainer>
    </AnimeGalleryContainer>
  )
}

export default Favorites
