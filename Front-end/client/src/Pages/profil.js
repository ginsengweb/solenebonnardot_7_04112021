import SecuredConnexion from "../components/Log/SecuredConnection"
import Nav from "../components/Navigation"
import UpdateProfil from "../components/Profil/UpdateProfil"

const Profil = () => {
  return (
    <div>
      <Nav />
      <SecuredConnexion>
        <div className="profil">
          <div className="profil-container">
            <UpdateProfil />
          </div>
        </div>
      </SecuredConnexion>
    </div>
  )
}

export default Profil
