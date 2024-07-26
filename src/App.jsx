import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import { createGlobalStyle } from "styled-components"

import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import NavBar from "./Components/NavBar/NavBar"

import { Home } from "./Pages/Home/Home"
import { Anime } from "./Pages/Anime/Anime"
import { AnimeDetail } from "./Pages/AnimeDetail/AnimeDetail"
import { Manga } from "./Pages/Manga/Manga"
import { AboutUs } from "./Pages/AboutUs/AboutUs"
import { Favorites } from "./Pages/Favorites/Favorites"

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
`
function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/anime-detail" element={<AnimeDetail />} />
          <Route path="/manga" element={<Manga />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
