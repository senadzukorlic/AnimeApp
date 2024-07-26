import React from "react"
// import logoF from './logoF.png'; // Uvoz slike
import { footerStyle, logoStyle, h1Style } from "./FooterStyled" // Uvoz stilova

const Header = () => {
  return (
    <div style={footerStyle}>
      {/* <img src={logoF} alt="AnimeApp Logo" style={logoStyle} /> */}
      <h1 style={h1Style}>AnimeApp</h1>
    </div>
  )
}

export default Header
