import {useNavigate} from "react-router-dom"

const SecuredConnexion = () => {
  const isAuth = () => localStorage.getItem("Token") != null
  console.log(localStorage.getItem("Token"))
  const Navigate = useNavigate()
  return isAuth() ? console.log("Token") : Navigate("/")
}

export default SecuredConnexion
