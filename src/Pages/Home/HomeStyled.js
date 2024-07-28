import { styled } from "@mui/material"

export const ParentDiv = styled("div")`
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
  align-items: center;
  width: 90%;
`

export const CardContainer = styled("div")`
  width: 100%;
  /* margin-bottom: 20px; */
  /* background-color: red; */
  padding-left: 10px;

  .card-scroll {
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    padding-bottom: 20px;
  }

  .card-scroll::-webkit-scrollbar {
    height: 10px;
    background-color: green;
  }

  .card-scroll::-webkit-scrollbar-thumb {
    background-color: #212024;
    border-radius: 8px;
  }

  .card-scroll::-webkit-scrollbar-track {
    background: #343338;
  }
`

export const GenreTitleDiv = styled("div")`
  display: flex;
  justify-content: start;
  padding-left: 10px;
  width: 100%;
  padding-top: 20px;
  margin-bottom: 20px;
`

export const GenreTitle = styled("h2")`
  color: white;
  font-weight: 400;
`
