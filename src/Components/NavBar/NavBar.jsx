import React from 'react';
import { NavbarContainer, Menu, MenuItem, MenuLink, FirstMenuItemLink, NotFirstMenuItem, NotFirstMenuItemLink } from './NavBarStyled';

const NavBar = () => {
    return (
        <NavbarContainer>
            <Menu>
                <MenuItem>
                    <FirstMenuItemLink href="#">Home</FirstMenuItemLink>
                </MenuItem>
                <NotFirstMenuItem>
                    <NotFirstMenuItemLink href="#">Anime</NotFirstMenuItemLink>
                </NotFirstMenuItem>
                <NotFirstMenuItem>
                    <NotFirstMenuItemLink href="#">Manga</NotFirstMenuItemLink>
                </NotFirstMenuItem>
                <NotFirstMenuItem>
                    <NotFirstMenuItemLink href="#">About Us</NotFirstMenuItemLink>
                </NotFirstMenuItem>
                <NotFirstMenuItem>
                    <NotFirstMenuItemLink href="#">Favorites</NotFirstMenuItemLink>
                </NotFirstMenuItem>
            </Menu>
        </NavbarContainer>
    );
}

export default NavBar;
