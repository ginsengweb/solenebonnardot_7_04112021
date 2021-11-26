import React, {useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
axios.defaults.baseURL = "http://localhost:4200/api/auth"
// créer un fichier séparé pour mettre cet URL puis on l'exporte pour l'utiliser (si changement plus tard c plus propre)
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded"

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
      url: `/inscription`,
      data: {
        email,
        password,
      },
    })
      .then(res => {
        console.log(res)
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email
          passwordError.innerHTML = res.data.errors.password
          //déceonseillé de faire des innerhtml, plutot faire des états poru définir ça (state error, et afficahge de manière conditionnelle dans le return)
        } else {
          const toRedirect = link => {
            navigate(link)
          }
          toRedirect("/posts")
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <form action="" onSubmit={handleInscription} id="inscription-form">
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
