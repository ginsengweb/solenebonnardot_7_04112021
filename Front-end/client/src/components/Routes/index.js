import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import accueil from "../../Pages/accueil"
import profil from "../../Pages/profil"
import messages from "../../Pages/messages"

const index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={accueil} />
        <Route path="/profil" exact component={profil} />
        <Route path="/messages" exact component={messages} />
      </Routes>
    </Router>
  )
}

export default index
