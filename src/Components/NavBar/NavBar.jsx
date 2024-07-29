import React from "react"
import { NavLinkStyled } from "./NavBarStyled"
import { NavbarContainer, Menu, MenuItem } from "./NavBarStyled"

const NavBar = () => {
  return (
    <NavbarContainer>
      <Menu>
        <MenuItem>
          <NavLinkStyled to="/" end>
            Home
          </NavLinkStyled>
        </MenuItem>
        <MenuItem>
          <NavLinkStyled to="/anime">Anime</NavLinkStyled>
        </MenuItem>
        <MenuItem>
          <NavLinkStyled to="/manga">Manga</NavLinkStyled>
        </MenuItem>
        <MenuItem>
          <NavLinkStyled to="/about-us">About Us</NavLinkStyled>
        </MenuItem>
        <MenuItem>
          <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
        </MenuItem>
      </Menu>
    </NavbarContainer>
  )
}

export default NavBar
