import React, {useState} from "react"
import axios from "axios"
axios.defaults.baseURL = "http://localhost:4200/api/auth"
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded"

const Inscription = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

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
        } else {
          window.location = "/posts"
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
        <br />
        <input type="submit" value="Je m'inscris" />
      </form>
    </div>
  )
}

export default Inscription
