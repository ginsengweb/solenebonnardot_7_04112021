import React, {useState} from "react"
import Inscription from "./Inscription"
import Connexion from "./Connexion"

const Log = () => {
  const [inscriptionModal, setInscriptionModal] = useState(true)
  const [connexionModal, setConnexionModal] = useState(false)

  const handleModal = e => {
    if (e.target.id === "inscription") {
      setInscriptionModal(true)
      setConnexionModal(false)
    } else if (e.target.id === "connexion") {
      setInscriptionModal(false)
      setConnexionModal(true)
    }
  }

  return (
    <div className="connection-form">
      <div className="form-container">
        <ul>
          <li onClick={handleModal}>Je m'inscris</li>
          <li onClick={handleModal}>Je me connecte</li>
        </ul>
        {inscriptionModal && <Inscription />}
        {connexionModal && <Connexion />}
      </div>
    </div>
  )
}

export default Log
