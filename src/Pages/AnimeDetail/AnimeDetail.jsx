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

export function AnimeDetail() {
  const { detailAnime } = useContext(AnimeData)

  // useEffect(() => {
  //   return () => {
  //     clearDetailAnime()
  //   }
  // }, [clearDetailAnime])

  return (
    <ParentDiv>
      {detailAnime.map((item) => (
        <>
          <AnimeImg src={item.attributes.posterImage.original} />
          <DescriptionDiv>
            <Title>{item.attributes.canonicalTitle}</Title>
            <DescriptionText>{item.attributes.description}</DescriptionText>
            <AddToFavorites>Add to favorites</AddToFavorites>
          </DescriptionDiv>
        </>
      ))}
    </ParentDiv>
  )
}
