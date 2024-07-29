import React from "react"
import ProfileCard from "./profileCard"
import Image from "../AboutUs/download.png"
import { ProfileCardsContainer } from "./AboutUsStyled"

export function AboutUs() {
  const socialLinksSenad = [
    { href: "#", iconClass: "fab fa-facebook-square" },
    { href: "#", iconClass: "fab fa-instagram" },
    { href: "https://github.com/senadzukorlic", iconClass: "fab fa-github" },
    {
      href: "https://linkedin.com/in/senad-zukorlic-49343a276/",
      iconClass: "fab fa-linkedin",
    },
  ]
  const socialLinksDzenis = [
    { href: "#", iconClass: "fab fa-facebook-square" },
    { href: "#", iconClass: "fab fa-instagram" },
    { href: "https://github.com/DzenisFejzovic", iconClass: "fab fa-github" },
    {
      href: "https://linkedin.com/in/dzenis-fejzovic-ba0aa5316",
      iconClass: "fab fa-linkedin",
    },
  ]
  const socialLinksAjtana = [
    { href: "#", iconClass: "fab fa-facebook-square" },
    { href: "#", iconClass: "fab fa-instagram" },
    { href: "https://github.com/AjtanaDjerlek", iconClass: "fab fa-github" },
    {
      href: "https://linkedin.com/in/ajtana-djerlek-121264317",
      iconClass: "fab fa-linkedin",
    },
  ]
  const socialLinksHaris = [
    { href: "#", iconClass: "fab fa-facebook-square" },
    { href: "#", iconClass: "fab fa-instagram" },
    { href: "https://github.com/harisbecirovic", iconClass: "fab fa-github" },
    {
      href: "https://www.linkedin.com/in/haris-becirovic-142565267/",
      iconClass: "fab fa-linkedin",
    },
  ]

  return (
    <ProfileCardsContainer>
      <ProfileCard
        image={Image}
        name="Senad Zukorlic"
        title="React Developer"
        description="Senad is a mathematician, and he works at center NIT as a Web developer."
        socialLinks={socialLinksSenad}
      />
      <ProfileCard
        image={Image}
        name="Dženis Fejzović"
        title="React Developer"
        description="Dženis is a mathematician, and he works at center NIT as a Web developer."
        socialLinks={socialLinksDzenis}
      />
      <ProfileCard
        image={Image}
        name="Ajtana Djerlek"
        title="React Developer"
        description="Ajtana is a mathematician, and she works at center NIT as a Web developer."
        socialLinks={socialLinksAjtana}
      />
      <ProfileCard
        image={Image}
        name="Haris Bećirović"
        title="React Developer"
        description="Haris is a mathematician, and he works at center NIT as a Web developer."
        socialLinks={socialLinksHaris}
      />
    </ProfileCardsContainer>
  )
}

export default AboutUs
