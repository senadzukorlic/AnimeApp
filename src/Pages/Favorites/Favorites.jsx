
import React from "react"
import { AnimeData } from "../../Context/Anime"
import { useContext } from "react"


import {
  AnimeGalleryContainer,
  AnimeGalleryTitle,
  AnimeImagesContainer,
  AnimeCard,
  AnimeImage,
  AnimeTitle,
  RemoveButton
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
            <AnimeCard key={item.id}>
            <AnimeImage className="anime-image" src={item.attributes.posterImage.original} alt={item.attributes.canonicalTitle} />
            <AnimeTitle className="anime-title">{item.attributes.canonicalTitle}</AnimeTitle>
            <RemoveButton className="remove-button" onClick={() => handleRemove(item.id)}>Remove From Favorites</RemoveButton>
          </AnimeCard>
          </div>

        ))}
      </AnimeImagesContainer>
    </AnimeGalleryContainer>
  )
}


export default Favorites

