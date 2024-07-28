import { styled } from "@mui/material";

export const AnimeStyled = styled("div")`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Creates 4 equal columns */
  grid-gap: 20px;
  padding: 20px;
`;

export const AnimeCard = styled("div")`
  overflow: hidden;
  transition: 1s;
  border-radius: 2px;
  height: 300px;
  width: 100%; /* Adjust width to fit grid column */
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover; /* or "contain", "100% 100%", etc. */
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  &:hover {
    transition: 0.3s;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
export const TextHolder = styled("div")`
  transition: 1s;
  color: rgba(255, 255, 255, 0);
  width: 100%;
  height: 100%;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  &:hover {
    transition: 0.3s;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
  }
`;
export const Text = styled("p")`
  transition: 1s;
  margin-top: 10px;
  z-index: 3;
  text-align: center;
`;
