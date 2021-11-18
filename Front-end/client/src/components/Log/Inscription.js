import React, {useState} from "react"
import axios from "axios"

const Inscription = () => {
  const [prenom, setPrenom] = useState("")
  const [nom, setNom] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleInscription = e => {
    const emailError = document.querySelector(".email.error")
    const passwordError = document.querySelector(".password.error")
    e.preventDefault()
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/inscription`,
      withCredentials: true,
      data: {
        prenom,
        nom,
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
      <form action="" onSubmit={handleInscription} id="inscription-form">
        <label htmlFor="nom">Nom</label>
        <br />
        <input
          type="text"
          name="nom"
          id="nom"
          onChange={e => setNom(e.target.value)}
          value={nom}
        />
        <br />
        <label htmlFor="prenom">Prénom</label>
        <br />
        <input
          type="text"
          id="prenom"
          name="prenom"
          onChange={e => setPrenom(e.target.value)}
          value={prenom}
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
        <div className="password error">Mot de passe invalide</div>
        <br />
        <input type="submit" value="Je m'inscris" />
      </form>
    </div>
  )
}

export default Inscription
