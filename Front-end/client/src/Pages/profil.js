import React, {useContext} from "react"
import Log from "../components/Log"
import {UidContext} from "../components/AppContext"

const Profil = () => {
  const uid = useContext(UidContext)
  return (
    <div className="profil-page">
      {uid ? (
        <h1>UPDATE PAGE</h1>
      ) : (
        <div className="log-container">
          <Log inscription={true} connexion={false} />
        </div>
      )}
    </div>
  )
}

export default Profil
