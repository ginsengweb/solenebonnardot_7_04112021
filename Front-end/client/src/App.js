import * as React from "react"
import {Routes, Route, Link} from "react-router-dom"
import Accueil from "../src/Pages/Accueil"
import Profil from "./Pages/Profil"
import "./styles/main.scss"
import {UidContext} from "./components/AppContext"
import axios from "axios"
import {useEffect, useState} from "react"

function App() {
  const [uid, setUid] = useState(null)

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `http://localhost:3000/jwtid`,
        withCredentials: true,
      })
        .then(res => {
          console.log(res)
          setUid(res.data)
        })
        .catch(err => console.log("No token"))
    }
    fetchToken()
  }, [uid]) // callback poru empêcher lancement à l'infini

  return (
    <UidContext.Provider value={uid}>
      {/* on pourra retrouver l'id user dans toute l'application */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
      </div>
    </UidContext.Provider>
  )
}
export default App
