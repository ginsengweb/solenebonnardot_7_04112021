import React from "react"
import {useState} from "react"

const SecuredConnexion = () => {
  const [isConnected, setIsConnected] = useState(false)

  //   const SecuredConnexionFunction = () => {
  if (isConnected === true) {
    setIsConnected(false)
  } else {
    setIsConnected(true)
  }
  console.log("User is connected :" + isConnected)
  //   }

  return <div></div>
}

export default SecuredConnexion
