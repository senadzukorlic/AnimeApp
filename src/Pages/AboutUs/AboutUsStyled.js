import { styled } from "@mui/material"

export const StyledProfileCard = styled("div")`
  z-index: 10000;
  width: 300px;
  height: 400px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  padding: 0;
  margin: 10px;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in-out;

  &:hover .profile-image-container {
    height: 140px;
    width: 140px;
    top: 20px;
    left: 25%;
    border-radius: 50%;
  }

  &:hover .profile-img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
  }

  &:hover .profile-info {
    opacity: 1;
    transform: translateY(0);
  }
`

export const ProfileImageContainer = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  transition: all 0.5s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
`

export const ProfileImg = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease-in-out;
`

export const ProfileInfo = styled("div")`
  opacity: 0;
  z-index: -1;
  transform: translateY(20px);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  padding: 20px;
  position: absolute;
  top: 120px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;

  h2 {
    font-size: 24px;
    margin-top: 50px;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 18px;
    margin-top: 20px;
    color: gray;
  }

  p {
    font-size: 16px;
    margin: 10px 0;
    color: gray;
  }
`

export const SocialIcons = styled("div")`
  margin-top: 40px;
  display: flex;
  justify-content: space-around;

  a {
    font-size: 1.5em;
    color: inherit;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: #0073b1;
      transform: scale(1.2);
    }
  }
`

export const ProfileCardsContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
  margin-bottom: 120px;
  margin-left: 3%;
  flex-wrap: wrap;
`
