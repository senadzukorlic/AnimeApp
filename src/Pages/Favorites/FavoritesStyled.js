import { styled } from "@mui/material"


export const AnimeGalleryContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  min-height: 100vh;
  width: 100%;
  padding: 20px;
`;


export const AnimeGalleryTitle = styled("h1")`
  color: #fff;
  margin-bottom: 20px;
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


export const AnimeTitle = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  padding: 10px;
  border-radius: 8px;
  opacity: 0;
  transition: opacity 0.3s;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &.anime-title {
    opacity: 0;
    width: 100%;
    margin-top:-175px;
  }
`;

export const RemoveButton = styled('button')`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 16px;
  text-decoration: underline;
  &.remove-button {
    opacity: 0;
  }

  &:hover {
    color: #ff0000;
  }
`
