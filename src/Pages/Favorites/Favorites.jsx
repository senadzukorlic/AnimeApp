import React from 'react';
import { AnimeData } from "../../Context/Anime"
import { useContext } from 'react';
import image from "../Favorites/download.png"; // Ensure this path points to your image file
import {
  AnimeGalleryContainer,
  AnimeGalleryTitle,
  AnimeImagesContainer,
  AnimeCard,
  AnimeImage
} from './FavoritesStyled';

export function Favorites() {
  const {favoriteAnime } = useContext(AnimeData)
  return (
    <AnimeGalleryContainer>
      <AnimeGalleryTitle>Anime</AnimeGalleryTitle>
      <AnimeImagesContainer>
        {favoriteAnime.map((item) => (<AnimeCard key={item.id}>
          <AnimeImage src={item.attributes.posterImage.original} alt="Anime 1" />
        </AnimeCard>))}
      </AnimeImagesContainer>
    </AnimeGalleryContainer>
  );
}

export default Favorites;
