import styled from 'styled-components';
import logoFooter from './logoFooter.png';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  width: 100%;
  
  text-align: center;
  padding: 10px 0;
  bottom: 0;
  left: 0;
  height: 20vh;
`;

export const FooterContent = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterText = styled.p`
  color: white;
  margin-left: 10px;
  margin-right: 20px;
  font-size: 30px;
  
`;

export const FooterLogo = styled.img`
  height: 7vh;
`;
export const FooterText2 = styled.p`
font-size: 15px;
color: white;
font-width: bold;
`;



export const FooterStyled= () => (
  <FooterContainer>
    <FooterContent style={{borderBottom: "1px solid #f029c1"}}>
      <FooterLogo src={logoFooter} alt="Logo" />
      <FooterText>AnimeApp</FooterText>
      <Link style={{marginLeft: "10px", marginRight: "10px",color: "white",textDecoration: "none", fontSize: "15px"}}to={"/"}>Home</Link>
      <Link style={{marginLeft: "10px", marginRight: "10px",color: "white",textDecoration: "none"}} to={"/anime"}>Anime</Link>
      <Link style={{marginLeft: "10px", marginRight: "10px",color: "white",textDecoration: "none"}} to={"/manga"}>Manga</Link>
      <Link style={{marginLeft: "10px", marginRight: "10px",color: "white",textDecoration: "none"}} to={"/about-us"}>About</Link>
    </FooterContent>
    <FooterContent>
      <FooterText2>© 2024 Flowbite™. All Rights Reserved.</FooterText2>
    </FooterContent>
  </FooterContainer>
);