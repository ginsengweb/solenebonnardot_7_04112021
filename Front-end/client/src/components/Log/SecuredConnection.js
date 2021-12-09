import {useNavigate} from "react-router-dom"

function SecuredConnexion({children}) {
  const isAuth = () => localStorage.getItem("Token") != null
  return isAuth() ? (
    <div>{children}</div>
  ) : (
    <div className="securedConnection">
      <h1>
        Vous devez être connecté pour entrer dans votre Communauté Groupomania,
        retournez à l'accueil !
      </h1>
    </div>
  )

  // const isAuth = () => localStorage.getItem("Token") != null
  // console.log(localStorage.getItem("Token"))
  // const Navigate = useNavigate()
  // return isAuth() ? console.log("Token") : Navigate("/")
}

export default SecuredConnexion
