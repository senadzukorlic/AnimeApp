import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarContainer, Menu, MenuItem, FirstMenuItemLink, NotFirstMenuItem, NotFirstMenuItemLink } from './NavBarStyled';

const NavBar = () => {
    return (
        <NavbarContainer>
            <Menu>
                <MenuItem>
                    <FirstMenuItemLink as={Link} to="/">Home</FirstMenuItemLink>
                </MenuItem>
                <NotFirstMenuItem>
                    <NotFirstMenuItemLink as={Link} to="/anime">Anime</NotFirstMenuItemLink>
                </NotFirstMenuItem>
                <NotFirstMenuItem>
                    <NotFirstMenuItemLink as={Link} to="/manga">Manga</NotFirstMenuItemLink>
                </NotFirstMenuItem>
                <NotFirstMenuItem>
                    <NotFirstMenuItemLink as={Link} to="/about-us">About Us</NotFirstMenuItemLink>
                </NotFirstMenuItem>
                <NotFirstMenuItem>
                    <NotFirstMenuItemLink as={Link} to="/favorites">Favorites</NotFirstMenuItemLink>
                </NotFirstMenuItem>
            </Menu>
        </NavbarContainer>
    );
}

export default NavBar;
