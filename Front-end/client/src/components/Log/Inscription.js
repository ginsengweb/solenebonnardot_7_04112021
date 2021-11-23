import React, {useState} from "react"
import axios from "axios"
axios.defaults.baseURL = "http://localhost:4200/api/auth"
// créer un fichier séparé pour mettre cet URL puis on l'exporte pour l'utiliser (si changement plus tard c plus propre)
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
      // mettre un paramètre header authorisation qui va envoyer le token
    })
      .then(res => {
        console.log(res)
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email
          passwordError.innerHTML = res.data.errors.password //déceonseillé de faire des innerhtml, plutot faire des états poru définir ça (state error, et afficahge de manière conditionnelle dans le return)
        } else {
          console.log("check si token récupéré")
          // récup TOKEN
          // puis mettre dans le localstorage pour sécuriser la route
          // window.location = "/posts"  //regarder fonction redirect ou react route plutot
          // a la page post on récup localstorage dans lequel il y a le TOKEN
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
        <div className="passwordConfirmError"></div> // ici mettre une condition
        true ou false (state=....)
        <br />
        <input type="submit" value="Je m'inscris" />
      </form>
    </div>
  )
}

export default Inscription
