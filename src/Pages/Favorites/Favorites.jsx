import React, { useContext } from 'react';
import { AnimeData } from "../../Context/Anime";
import {
  AnimeGalleryContainer,
  AnimeGalleryTitle,
  AnimeImagesContainer,
  AnimeCard,
  AnimeImage,
  AnimeTitle,
  RemoveButton
} from './FavoritesStyled';

export function Favorites() {
  const { favoriteAnime, removeFavorite } = useContext(AnimeData);

  const handleRemove = (id) => {
    removeFavorite(id);
  };

  return (
    <AnimeGalleryContainer>
      <AnimeGalleryTitle>Anime</AnimeGalleryTitle>
      <AnimeImagesContainer>
        {favoriteAnime.map((item) => (
          <AnimeCard key={item.id}>
            <AnimeImage className="anime-image" src={item.attributes.posterImage.original} alt={item.attributes.canonicalTitle} />
            <AnimeTitle className="anime-title">{item.attributes.canonicalTitle}</AnimeTitle>
            <RemoveButton className="remove-button" onClick={() => handleRemove(item.id)}>Remove From Favorites</RemoveButton>
          </AnimeCard>
        ))}
      </AnimeImagesContainer>
    </AnimeGalleryContainer>
  );
}

export default Favorites;

