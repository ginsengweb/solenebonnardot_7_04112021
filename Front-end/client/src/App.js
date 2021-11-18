import * as React from "react"
import {Routes, Route, Link} from "react-router-dom"
import Accueil from "../src/Pages/Accueil"
import "./styles/main.scss"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Accueil />} />
      </Routes>
    </div>
  )
}
export default App
