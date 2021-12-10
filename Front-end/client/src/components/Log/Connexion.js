import axios from "axios"
import {useNavigate} from "react-router-dom"
import {useForm} from "react-hook-form"
import {useState} from "react"

axios.defaults.baseURL = "http://localhost:4200/api/auth"
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded"
const Connexion = () => {
  const [errorData, setErrorData] = useState("")

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const navigate = useNavigate()

  const onSubmit = data => {
    console.log(data)
    axios({
      method: "POST",
      url: `/connexion`,
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
        <input type="submit" value="Je me connecte" />
        <span className="error-message">{errorData}</span>
      </form>
    </div>
  )
}

export default Connexion
