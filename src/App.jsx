import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import { createGlobalStyle } from "styled-components"

import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import NavBar from "./Components/NavBar/NavBar"

import { Home } from "./Pages/Home/Home"
import Anime from "./Pages/Anime/Anime"
import { AnimeProvider } from "./Context/Anime"
import { AnimeDetail } from "./Pages/AnimeDetail/AnimeDetail"
import Manga from "./Pages/Manga/Manga"
import { AboutUs } from "./Pages/AboutUs/AboutUs"
import { Favorites } from "./Pages/Favorites/Favorites"
import { RemoveFromFavorites } from "./Pages/RemoveFromFavorites/RemoveFromFavorites"

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
    overflow-y: auto;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgb(52, 51, 56);
  }

  ::-webkit-scrollbar-thumb {
    background: #ed4cc2; 
    border-radius: 4px; 
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #ed4cc2; 
  }

 
 
`

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <NavBar />
        <AnimeProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/anime" element={<Anime />} />
            <Route path="/anime-detail" element={<AnimeDetail />} />
            <Route path="/manga" element={<Manga />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/remove-favorites" element={<RemoveFromFavorites />} />
          </Routes>
        </AnimeProvider>
      </div>
      <Footer />
    </>
  )
}

export default App
