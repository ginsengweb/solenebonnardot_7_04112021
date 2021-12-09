import axios from "axios"
import {useForm} from "react-hook-form"

// créer un fichier séparé pour mettre cet URL puis on l'exporte pour l'utiliser (si changement plus tard c plus propre)
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded"

const UpdateProfil = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"))
  const prenomUser = userInfo.prenom
  const nomUser = userInfo.nom
  const id = userInfo.id
  const email = userInfo.email
  const mini_bio = userInfo.mini_bio
  console.log(email)
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const onSubmit = data => {
    console.log(data)
    let prenom = data.prenom
    let nom = data.nom
    let email = data.email
    let mini_bio = data.mini_bio
    let profilePicture = data.profile_picture
    console.log(nom + prenom)
    axios({
      method: "PUT",
      url: "http://localhost:4200/api/user",
      headers: {
        "x-access-token": localStorage.getItem("Token"),
      },
      data: {
        id,
        prenom,
        nom,
        email,
        mini_bio,
        profilePicture,
      },
    })
      .then(res => {
        console.log(res.data.user)
        let userInfo = JSON.stringify(res.data.user)
        localStorage.setItem("userInfo", userInfo)
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <div className="user">
      <div className="user-welcome">
        <h1>Bienvenue {prenomUser}</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="user-form">
        <div className="data-form">
          <label htmlFor="prenom" className="user-form-label">
            Prénom
          </label>
          <br />
          <input
            type="text"
            className="user-form-input"
            placeholder={prenomUser}
            {...register("prenom", {
              minLength: {
                value: 2,
                message: "Votre prénom est sûrement plus long !",
              },
              maxLength: {
                value: 40,
                message: "Ce prénom semble trop long...",
              },
            })}
          />
          {errors.prenom && <span>{errors.prenom.message}</span>}
          <br />
          <label htmlFor="nom" className="user-form-label">
            Nom
          </label>
          <br />
          <input
            type="text"
            className="user-form-input"
            placeholder={nomUser}
            {...register("nom", {
              minLength: {
                value: 2,
                message: "Votre nom est sûrement plus long !",
              },
              maxLength: {
                value: 40,
                message: "Ce nom semble trop long...",
              },
            })}
          />
          {errors.nom && <span>{errors.nom.message}</span>}
          <br />
          <label htmlFor="email" className="user-form-label">
            Email
          </label>
          <br />
          <input
            className="user-form-input"
            placeholder={email}
            type="email"
            {...register("email", {
              message: "Vous devez entrer une adresse mail valide",
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
          <br />
          <label htmlFor="mini_bio" className="user-form-label">
            Mini Bio
          </label>
          <br />
          <input
            placeholder={mini_bio}
            className="user-form-label-mini_bio"
            type="text"
            {...register("mini_bio")}
          />
          <br />
          <div className="picture-form">
            <label htmlFor="profilePicture" className="user-form-label">
              Photo de profil
            </label>
            <br />
          </div>
          <input
            className="user-form-label-img"
            type="img"
            {...register("profilePicture")}
          />
          <br />
          <input
            className="post-button"
            type="submit"
            value="Modifier mon profil"
          />
        </div>
      </form>
    </div>
  )
}

export default UpdateProfil
