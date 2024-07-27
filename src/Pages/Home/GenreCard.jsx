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
        <Link to="/anime-detail" style={{ textDecoration: "none" }}>
          <StyledCard>
            <StyledCardMedia
              component="img"
              image={animeManga}
              alt={`${genre} poster`}
            ></StyledCardMedia>
          </StyledCard>
        </Link>
      </CardDiv>
    </ParentDiv>
  )
}
