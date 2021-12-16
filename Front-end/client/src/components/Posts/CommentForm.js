import React, {useEffect, useState} from "react"
import axios from "axios"
import {useForm} from "react-hook-form"

const CommentForm = props => {
  const [message, setMessage] = useState()

  useEffect(() => {
    setMessage()
  }, [message])

  const user_id = JSON.parse(localStorage.getItem("userInfo")).id

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const onSubmit = data => {
    axios({
      method: "POST",
      url: "http://localhost:4200/api/comment",
      headers: {
        "x-access-token": localStorage.getItem("Token"),
      },
      data: {
        users_id: user_id,
        post_id: props.postId,
        content: data.content,
      },
    })
      .then(res => {
        console.log("res data comment", res.data.comment)
        props.newComment(res.data.comment)
        setMessage("")
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="comment-form">
        <textarea
          placeholder="Ecrivez un commentaire ici !"
          className="content_input"
          value={message}
          onChange={e => setMessage(e.target.value)}
          {...register("content", {
            minLength: {
              value: 10,
              message: "Vous devez commenter ## caractères au minimum !",
            },
            maxLength: {
              value: 350,
              message:
                "Vous êtes au maximum de caractères pour ce commentaire !",
            },
          })}
        />
        {errors.content && <span>{errors.content.message}</span>}
        <input
          className="comment-button button"
          type="image"
          src="./images/send.png"
          alt="send"
        />
      </form>
    </div>
  )
}

export default CommentForm
