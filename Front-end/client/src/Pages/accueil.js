import Log from "../components/Log"
import Nav from "../components/Navigation"

const Accueil = () => {
  return (
    <div>
      <Nav />
      <div className="accueil">
        <div className="log-container">
          <Log />
        </div>
      </div>
    </div>
  )
}

export default Accueil
