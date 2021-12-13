import axios from "axios"
import {useState} from "react"
import {useForm} from "react-hook-form"

const PostForm = props => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const [postPicture, setPostPicture] = useState(null)
  const [file, setFile] = useState(false)

  const handlePicture = e => {
    setPostPicture(URL.createObjectURL(e.target.files[0]))
    setFile(e.target.files[0])
  }
  // const handlePost = async () => {
  //   const user_id = JSON.parse(localStorage.getItem("userInfo")).id
  //   const data = new FormData()
  //   data.append("user_id", "text_content", "file")
  //   data.append("file", file)
  //   console.log(data)
  // }

  const onSubmit = async () => {
    // if (!data.text_content) {
    //   console.log("Veuillez entrer un message")
    // } else {
    // console.log(data)
    const user_id = JSON.parse(localStorage.getItem("userInfo")).id
    const data = new FormData()
    data.append({"user_id": user_id, "text_content": data.text_content})
    data.append("file", file)
    console.log(data)
    await axios({
      method: "POST",
      url: "http://localhost:4200/api/posts",
      headers: {
        "Content-type": "multipart/form-data",
        "x-access-token": localStorage.getItem("Token"),
      },
      data,
    })
      .then(res => {
        console.log(res.data.post)
        props.addPost(res.data.post)
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="post-form">
        <div className="column1">
          <label htmlFor="text_content" className="text_content_label">
            Que souhaitez-vous partager avec vos collègues aujourd'hui ?
          </label>
          <br />
          <input
            type="textarea"
            className="text_content_input"
            {...register("text_content", {
              minLength: {
                value: 10,
                message:
                  "Vous devez créer un post de 10 caractères au minimum !",
              },
              maxLength: {
                value: 350,
                message: "Vous êtes au maximum de caractères pour ce post !",
              },
            })}
          />
          {errors.text_content && <span>{errors.text_content.message}</span>}
        </div>
        <div className="column2">
          <label for="imageUrl">
            <img src={"/images/video.png"} alt="logo" className="add_media" />
          </label>
          <input
            type="file"
            id="imageUrl"
            name="file"
            accept=".jpg, .jpeg, .png"
            onChange={e => handlePicture(e)}
          />
          <input
            className="post-button"
            type="submit"
            value="Poster"
            // onClick={handlePost}
          />
        </div>

        <div className="preview-container">
          <img src={postPicture} alt="" />
        </div>
      </form>
    </div>
  )
}

export default PostForm
