import axios from "axios"
import {useForm} from "react-hook-form"

// créer un fichier séparé pour mettre cet URL puis on l'exporte pour l'utiliser (si changement plus tard c plus propre)
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded"

const PostForm = () => {
  const user_id = JSON.parse(localStorage.getItem("userInfo")).user_id
  console.log(user_id)
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const onSubmit = data => {
    console.log(data)
    axios({
      method: "POST",
      url: "http://localhost:4200/api/posts",
      headers: {
        "x-access-token": localStorage.getItem("Token"),
      },
      data: {
        user_id: user_id,
        text_content: data.text_content,
        media_content: data.media_content,
      },
    })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="text_content">
          Que souhaitez-vous partager avec vos collègues aujourd'hui ?
        </label>
        <br />
        <input
          {...register("text_content", {
            minLength: {
              value: 10,
              message: "Vous devez créer un post de 1à caractères au minimum !",
            },
            maxLength: {
              value: 350,
              message: "Vous êtes au maximum de caractères pour ce post !",
            },
          })}
        />
        {errors.text_content && <span>{errors.text_content.message}</span>}
        <br />
        <label htmlFor="media_content">
          <img src="../../public/images/reseau-social.jpg" alt="add-media" />
        </label>
        <br />
        <input {...register("media_content", {})} />
        <br />

        <input type="submit" value="Partager mon post" />
      </form>
    </div>
  )
}

export default PostForm
