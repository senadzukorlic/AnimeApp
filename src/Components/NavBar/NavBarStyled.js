
import styled from 'styled-components';

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: left;
    align-items: left;
    color: white;
    padding: 20px;
    border-bottom: 1px solid white; /* Donja linija ispod navbar-a */
    height: 100vh;
    width: 150px;
    border-right: 1px solid aliceblue;
    border-top: none;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: bold; /* Povećava debljinu fonta */
   
`;

export const Menu = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: left; /* Poravnavanje stavki na levo */
    color: white;
    width: 100%; /* Širina menija */
   font-size: 15px;
    height: 100%; /* Visina menija */
`;

export const MenuItem = styled.li`
    margin-bottom: 26px; /* Dodatna margina između stavki */
`;

export const MenuLink = styled.a`
    color: rgb(153, 149, 149);
    text-decoration: none; /* Uklanja dekoraciju slova */
   
    transition: background-color 0.2s ease; /* Glatak prelaz za hover efekat */

`;

export const FirstMenuItemLink = styled(MenuLink)`
    color: white; /* Boja teksta za prvi link */
    font-size: 20px;
    
    transition: transform 0.2s , font-size 0.2s ease; /* Glatki prelaz za transformaciju i promenu veličine fonta */
    display: inline-block; /* Postavlja elemente da budu u liniji */
    margin: 0px;
    margin-top:20px;
    margin-right: 10px; /* Dodaje malo razmaka između elemenata */
    &:hover {
        transform: translateX(9px)  /* Pomeranje na desno za 5 piksela i povećanje veličine za 5% */
    }
`;

export const NotFirstMenuItemLink = styled(MenuLink)`
    color: rgb(153, 149, 149); /* Boja teksta za sve ostale linkove */
    background-color: transparent; /* Transparentna pozadina za sve ostale linkove */
    

    
`;

export const NotFirstMenuItem = styled(MenuItem)`
    display: inline-block; /* Postavlja elemente da budu u liniji */
    margin-right: 10px; /* Dodaje malo razmaka između elemenata */
    transition: transform 0.3s ease, font-size 0.3s ease; /* Glatki prelaz za transformaciju i promenu veličine fonta */

    &:hover {
        transform: translateX(9px) scale(1.05); /* Pomeranje na desno za 5 piksela i povećanje veličine za 5% */
    }
`;