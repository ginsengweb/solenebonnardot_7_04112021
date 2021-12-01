import React from "react"
import {useNavigate} from "react-router-dom"
// import {connectionState as connectionStateAtom} from "../../atoms/connected"
// import {useRecoilState} from "recoil"

const SecuredConnexion = () => {
  //   console.log("securedconnexionlancé")
  //   const [isConnected, setIsConnected] = useRecoilState(connectionStateAtom)
  //   if (isConnected === true) {
  //     setIsConnected(false)
  //     console.log("securedconnexionIFlancé")
  //   } else {
  //     setIsConnected(true)
  //     console.log("securedconnexionELSElancé")
  //   }
  //   console.log("User is connected :" + isConnected)

  //   return <div></div>
  // }

  //

  const isAuth = () => localStorage.getItem("Token") != null
  const Navigate = useNavigate()
  return isAuth() ? console.log("Token") : Navigate("/")
}

export default SecuredConnexion
