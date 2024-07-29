import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  color: white;
  padding: 20px;
  width: 150px;
  border-right: 1px solid aliceblue;
  border-bottom: none;
  margin: 0;
  font-weight: bold;
`

export const Menu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: left;
  color: white;
  width: 100%;
  font-size: 15px;
  height: 100%;
`

export const MenuItem = styled.li`
  margin-bottom: 26px;
`

export const NavLinkStyled = styled(NavLink)`
  color: rgb(153, 149, 149);
  text-decoration: none;
  transition: transform 0.2s, font-size 0.2s ease;
  display: inline-block;
  margin: 0;
  margin-top: 20px;
  margin-right: 10px;

  &:hover {
    font-size: 18px;
    color: white;
    transform: translateX(9px);
  }

  &.active {
    font-size: 20px;
    color: white;
  }
`
