import SecuredConnection from "../components/Log/SecuredConnection"
import UpdateProfil from "../components/Profil/UpdateProfil"

const Profil = () => {
  SecuredConnection()

  return (
    <div className="profil-page">
      <UpdateProfil></UpdateProfil>
    </div>
  )
}

export default Profil
