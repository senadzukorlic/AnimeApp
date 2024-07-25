import { styled } from "@mui/material"

import { Card, CardMedia } from "@mui/material"

export const ParentDiv = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  gap: 20px;
`
export const GenreTitleDiv = styled("div")`
  display: flex;
  justify-content: start;
  /* background-color: purple; */
  padding-left: 10px;
  width: 100%;
  padding-top: 20px;
`

export const GenreTitle = styled("h2")`
  color: white;
  font-weight: 400;
`

export const CardDiv = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 10px;
  /* background-color: green; */
  width: 100%;
  height: 100%;
`
export const StyledCard = styled(Card)`
  max-width: 120px;
  height: 180px;
  border-radius: 0;
  margin-left: 30px;
  padding-top: 64px; /* Ovo odgovara theme.spacing(8) */
  /* background-color: orange; */
  transition: transform 0.1s ease-in-out;
  overflow: visible;

  &:hover {
    transform: scale(1.12);
  }
`

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  width: 150,
  height: 150,
  border: "none",
}))
