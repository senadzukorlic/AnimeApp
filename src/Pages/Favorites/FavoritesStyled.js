import { styled } from "@mui/material"

export const AnimeGalleryContainer = styled("div")`
  width: 100%;
  padding: 12px;
  height: 100vh;
`

export const AnimeGalleryTitle = styled("h1")`
  color: #fff;
  margin: 0 0 10px 0;
  font-size: 24px;
  border-bottom: 1px solid #fff;
  padding-bottom: 10px;
`

export const AnimeImagesContainer = styled("div")`
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  width: 100%;
  gap: 30px;
`

export const AnimeCard = styled("div")``

export const AnimeImage = styled("img")`
  width: 280px;
  height: 400px;
  border-radius: 8px;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`
