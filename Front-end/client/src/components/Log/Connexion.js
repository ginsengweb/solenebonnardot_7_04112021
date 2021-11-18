import React, {useState} from "react"
import axios from "axios"

const Connexion = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleInscription = e => {}

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
