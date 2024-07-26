import {
  ParentDiv,
  GenreTitleDiv,
  GenreTitle,
  CardDiv,
  StyledCard,
  StyledCardMedia,
} from "./GenreCardStyled"

export function GenreCard({ genre, animeManga, index }) {
  return (
    <ParentDiv>
      <GenreTitleDiv>
        <GenreTitle>{genre}</GenreTitle>
      </GenreTitleDiv>

      <CardDiv>
        <StyledCard key={index}>
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
