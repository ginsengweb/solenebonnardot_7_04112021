import axios from "axios"

const PostForm = () => {
  const handleConnexion = e => {
    axios({
      method: "POST",
      url: `http://localhost:4200/api/posts/createPost`,
      data: {},
      header: {
        "Authorisation": "SECRET_TOKEN",
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
      <form action="" onSubmit={handleConnexion} id="posts-form">
        <label htmlFor="text_content">
          Que souhaitez-vous partager avec vos collègues aujourd'hui ?
        </label>
        <br />
        <input type="text" name="text_content" id="text_content" />
        <br />
        <input type="submit" value="Partager mon post" />
      </form>
    </div>
  )
}
export default PostForm
