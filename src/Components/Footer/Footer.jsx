import React from "react"
import logoFoooter from "./logoFoooter.png"
import { Link } from "react-router-dom"
import {
  FooterContainer,
  FooterContent,
  FooterLogo,
  FooterText,
  FooterText2,
} from "./FooterStyled"

const Footer = () => (
  <FooterContainer>
    <FooterContent style={{ borderBottom: "1px solid pink" }}>
      <FooterLogo src={logoFoooter} alt="Logo" />
      <FooterText>AnimeApp</FooterText>
      <Link
        style={{
          marginLeft: "10px",
          marginRight: "10px",
          color: "white",
          textDecoration: "none",
          fontSize: "15px",
        }}
        to={"/"}
      >
        Home
      </Link>
      <Link
        style={{
          marginLeft: "10px",
          marginRight: "10px",
          color: "white",
          textDecoration: "none",
        }}
        to={"/anime"}
      >
        Anime
      </Link>
      <Link
        style={{
          marginLeft: "10px",
          marginRight: "10px",
          color: "white",
          textDecoration: "none",
        }}
        to={"/manga"}
      >
        Manga
      </Link>
      <Link
        style={{
          marginLeft: "10px",
          marginRight: "10px",
          color: "white",
          textDecoration: "none",
        }}
        to={"/about-us"}
      >
        About
      </Link>
    </FooterContent>
    <FooterContent>
      <FooterText2>© 2024 Flowbite™. All Rights Reserved.</FooterText2>
    </FooterContent>
  </FooterContainer>
)
export default Footer
