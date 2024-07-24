import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { BrowserRouter as Router } from "react-router-dom"
import { AnimeProvider } from "./Context/Anime.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <AnimeProvider>
    <Router>
      <App />
    </Router>
  </AnimeProvider>
)
