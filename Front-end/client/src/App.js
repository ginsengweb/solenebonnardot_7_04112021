import * as React from "react"
import {Routes, Route} from "react-router-dom"
import Accueil from "../src/Pages/Accueil"
import Profil from "./Pages/Profil"
import Posts from "./Pages/Posts"
import "./styles/main.scss"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  )
}
export default App
