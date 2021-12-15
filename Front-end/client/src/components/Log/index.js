import React, {useState} from "react"
import Inscription from "./Inscription"
import Connexion from "./Connexion"

const Log = () => {
  const [inscriptionModal, setInscriptionModal] = useState(true)
  const [connexionModal, setConnexionModal] = useState(false)

  const handleModals = e => {
    if (e.target.id === "inscription") {
      setInscriptionModal(true)
      setConnexionModal(false)
    } else if (e.target.id === "connexion") {
      setInscriptionModal(false)
      setConnexionModal(true)
    }
  }
  localStorage.clear()

  return (
    <div className="connection-form">
      <div className="form-container">
        <ul>
          <li onClick={handleModals} id="inscription" className="button">
            Je m'inscris
          </li>
          <li onClick={handleModals} id="connexion" className="button">
            Je me connecte
          </li>
        </ul>
        {inscriptionModal && <Inscription />}
        {connexionModal && <Connexion />}
      </div>
    </div>
  )
}

export default Log
