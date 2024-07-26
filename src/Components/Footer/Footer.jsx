import React from 'react';
import logoF from './logoF.png'; // Uvoz slike
import { footerStyle, logoStyle, h1Style, navStyle, navLinkStyle, lineStyle } from './FooterStyled'; // Uvoz stilova

const Header = () => {
    return (
        <div style={footerStyle}>
            <img src={logoF} alt="AnimeApp Logo" style={logoStyle} />
            <h1 style={h1Style}>AnimeApp</h1>
            <nav style={navStyle}>
                <a href="#home" style={navLinkStyle}>Home</a>
                <a href="#anime" style={navLinkStyle}>Anime</a>
                <a href="#manga" style={navLinkStyle}>Manga</a>
                <a href="#about-us" style={navLinkStyle}>About Us</a>
            </nav>
            <div style={lineStyle}></div> {/* Dodaj liniju ispod */}
        </div>
    );
}

export default Header;
