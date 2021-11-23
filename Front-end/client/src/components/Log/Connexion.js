import React, {useState} from "react"
import axios from "axios"

const Connexion = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleConnexion = e => {
    const emailError = document.querySelector(".email.error")
    const passwordError = document.querySelector(".password.error")
    e.preventDefault()
    axios({
      method: "post",
      url: `http://localhost:4200/api/auth/connexion`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then(res => {
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email
          passwordError.innerHTML = res.data.errors.password
        } else {
          window.location = "/"
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <form action="" onSubmit={handleConnexion} id="inscription-form">
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
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
        <br />
        <input type="submit" value="Je me connecte" />
      </form>
    </div>
  )
}
export default Connexion
