import {
  ParentDiv,
  GenreTitleDiv,
  GenreTitle,
  CardDiv,
  StyledCard,
  StyledCardMedia,
} from "./GenreCardStyled"

import { Link } from "react-router-dom"

export function GenreCard({ genre, animeManga }) {
  return (
    <ParentDiv>
      <CardDiv>
        <StyledCard>
          <StyledCardMedia
            component="img"
            image={animeManga}
            alt={`${genre} poster`}
          ></StyledCardMedia>
        </StyledCard>
      </CardDiv>
    </ParentDiv>
  )
}
