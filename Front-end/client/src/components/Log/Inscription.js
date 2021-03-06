import axios from "axios"
import {useNavigate} from "react-router-dom"
import {useForm} from "react-hook-form"
import {useState} from "react"

const Inscription = () => {
  // useState
  const [errorData, setErrorData] = useState("")

  // register
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  // navigate
  const navigate = useNavigate()

  // axios
  const onSubmit = data => {
    axios({
      method: "POST",
      url: `http://localhost:4200/api/auth/inscription`,
      data: {
        prenom: data.prenom,
        nom: data.nom,
        email: data.email,
        password: data.password,
      },
    })
      .then(res => {
        let token = res.data.token
        let userInfo = JSON.stringify(res.data)
        localStorage.setItem("Token", token)
        localStorage.setItem("userInfo", userInfo)
        navigate("/posts")
      })
      .catch(error => {
        console.log(error)
        setErrorData(
          "Vous êtes déjà inscrit à cette adresse mail, connectez-vous !"
        )
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="accueil-form">
        {/* prenom */}
        <label htmlFor="prenom">Prenom</label>
        <br />
        <input
          {...register("prenom", {
            required: true,
            minLength: {
              value: 2,
              message: "Vous devez entrer au moins 2 caractères",
            },
            maxLength: {
              value: 15,
              message: "Vous devez entrer au maximum 15 caractères",
            },
          })}
        />
        {errors.prenom && <span>{errors.prenom.message}</span>}
        <br />
        {/* nom */}
        <label htmlFor="nom">Nom</label>
        <br />
        <input
          type="text"
          {...register("nom", {
            required: true,
            minLength: {
              value: 2,
              message: "Vous devez entrer au moins 2 caractères",
            },
            maxLength: {
              value: 15,
              message: "Vous devez entrer au maximum 15 caractères",
            },
          })}
        />
        {errors.nom && <span>{errors.nom.message}</span>}
        <br />
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
        <input type="submit" value="Je m'inscris" className="button" />
        <span className="error-message">{errorData}</span>{" "}
      </form>
    </div>
  )
}

export default Inscription
