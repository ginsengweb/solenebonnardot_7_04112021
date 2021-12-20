import axios from "axios"
import {useNavigate} from "react-router-dom"
import {useForm} from "react-hook-form"
import {useState} from "react"

const Connexion = () => {
  // useState
  const [errorData, setErrorData] = useState("")

  // registrer + err
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  // usenavigate
  const navigate = useNavigate()

  const onSubmit = data => {
    // axios
    axios({
      method: "POST",
      url: `http://localhost:4200/api/auth/connexion`,
      data: {
        email: data.email,
        password: data.password,
      },
    })
      .then(res => {
        let token = res.data.token
        let userInfo = JSON.stringify(res.data)
        console.log(token + userInfo)
        localStorage.setItem("Token", token)
        localStorage.setItem("userInfo", userInfo)
        navigate("/posts")
      })
      .catch(err => {
        console.log(err)
        setErrorData("Vous n'êtes pas inscrit !")
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="accueil-form">
        {/* email */}
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          {...register("email", {
            required: true,
            message: "Vous devez entrer une adresse mail valide",
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
        <br />

        {/* password */}
        <label htmlFor="password">Mot de passe</label>
        <br />
        <input
          type="password"
          {...register("password", {
            required: true,
            pattern: {
              value: /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,64})$/,
              message:
                "Votre mot de passe doit contenir au moins 6 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial",
            },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
        <br />
        <input type="submit" value="Je me connecte" className="button" />
        <span className="error-message">{errorData}</span>
      </form>
    </div>
  )
}

export default Connexion
