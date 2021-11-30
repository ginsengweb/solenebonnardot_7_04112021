import React from "react"
import {connectionState as connectionStateAtom} from "../../atoms/connected"
import {useRecoilState, useRecoilValue} from "recoil"

const SecuredConnexion = () => {
  console.log("securedconnexionlancé")
  const [isConnected, setIsConnected] = useRecoilState(connectionStateAtom)
  if (isConnected === true) {
    setIsConnected(false)
    console.log("securedconnexionIFlancé")
  } else {
    setIsConnected(true)
    console.log("securedconnexionELSElancé")
  }
  console.log("User is connected :" + isConnected)

  return <div></div>
}

export default SecuredConnexion
