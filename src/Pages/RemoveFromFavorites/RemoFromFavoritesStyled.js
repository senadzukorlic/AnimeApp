import styled from "styled-components"

export const ParentDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-bottom: 100px;
`

export const AnimeImg = styled.img`
  height: 400px;
  border-radius: 10px;
  padding-top: 20px;
  padding-left: 20px;
`

export const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 20px;
`

export const Title = styled.h2`
  font-size: 2.5em;
  margin: 0;
  padding: 0;
  color: white;
`

export const DescriptionText = styled.p`
  font-size: 1em;
  margin-top: 10px;
  font-weight: 300;
  color: white;
`

export const AddToFavorites = styled("Button")`
  border: 1px solid white;
  background-color: inherit;
  color: white;
  border-radius: 5px;
  width: 200px;
  height: 45px;
  font-size: 1em;
  margin-top: 20px;
  &:hover {
    transition: 0.1s ease-in-out;
    transform: scale(1.1);
    border: 2px solid;
  }
`
