import axios from "axios"
import React, {useEffect, useState} from "react"

const UpdateProfil = () => {
  //   const [data, setData] = useState([])
  console.log("updateprofillancé")
  useEffect(() => {
    axios
      .get(
        `http://localhost:4200/api/user/${
          JSON.parse(localStorage.getItem("user")).user_id
        }`
      )
      .then(res => console.log(res.data))
  }, [])

  return (
    <div className="profil-container">
      <h1>Profil de {}</h1>
    </div>
  )
}

export default UpdateProfil
