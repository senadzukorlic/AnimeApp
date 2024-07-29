import React from "react"
import logoH from "./logoH.png"
import { headerStyle, logoStyle, h1Style } from "./HeaderStyled"
const Header = () => {
  return (
    <div style={headerStyle}>
      <img src={logoH} alt="AnimeApp Logo" style={logoStyle} />
      <h1 style={h1Style}>AnimeApp</h1>
    </div>
  )
}

export default Header
