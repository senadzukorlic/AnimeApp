import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";

import { Home } from "./Components/Home/Home";
import Anime from "./Components/Anime/Anime";
import { Manga } from "./Components/Manga/Manga";
import { AboutUs } from "./Components/AboutUs/AboutUs";
import { Favorites } from "./Components/Favorites/Favorites";
import { AnimeProvider } from "./Context/Anime";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    width: 100%;
    background-color: rgb(52, 51, 56);
  }
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <NavBar />
      <AnimeProvider>
        <Anime />
      </AnimeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/manga" element={<Manga />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
