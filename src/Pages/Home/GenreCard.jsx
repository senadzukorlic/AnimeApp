import {
  ParentDiv,
  GenreTitleDiv,
  GenreTitle,
  CardDiv,
  StyledCard,
  StyledCardMedia,
} from "./GenreCardStyled"

export function GenreCard({ genre, animeManga }) {
  console.log("GenreCard props:", { genre, animeManga })

  return (
    <ParentDiv>
      <GenreTitleDiv>
        <GenreTitle>{genre}</GenreTitle>
      </GenreTitleDiv>

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
