import React, {useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Inscription = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleInscription = e => {
    e.preventDefault()
    const emailError = document.querySelector(".email.error")
    const passwordError = document.querySelector(".password.error")
    axios({
      method: "POST",
      url: `http://localhost:4200/api/auth/inscription`,
      data: {
        email,
        password,
      },
    })
      .then(res => {
        let token = JSON.stringify(res.data.token)
        let userInfo = JSON.stringify(res.data)
        console.log(token)
        console.log(userInfo)
        localStorage.setItem("Token", token)
        localStorage.setItem("userInfo", userInfo)
        navigate("/posts")
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <form action="" onSubmit={handleInscription} id="inscription-form">
        <label htmlFor="prenom">Prenom</label>
        <br />
        <input
          type="text"
          name="prenom"
          id="prenom"
          // onChange={e => setPrenom(e.target.value)}
          // value={prenom}
        />
        <br />
        <label htmlFor="nom">Nom</label>
        <br />
        <input
          type="text"
          name="nom"
          id="nom"
          onChange={e => setEmail(e.target.value)}
          // value={nom}
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <div className="email error">E-mail invalide</div>
        <br />
        <label htmlFor="password">Mot de passe</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
        <div className="passwordConfirmError"></div>
        {/* ici mettre une condition true ou false (state=....) */}
        <br />
        <input type="submit" value="Je m'inscris" />
      </form>
    </div>
  )
}

export default Inscription
