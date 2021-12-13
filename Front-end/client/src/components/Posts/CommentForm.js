import React, {useEffect, useState} from "react"
import axios from "axios"
import {useForm} from "react-hook-form"

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded"

const CommentForm = (postId, props) => {
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
        post_id: postId.postId,
        content: data.content,
      },
    })
      .then(res => {
        console.log(res.data.comment)
        props.addnewcomment(res.data.comment)
      })
      .catch(err => {
        console.log(err)
      })
  }
  // useEffect(
  //   newComment => {
  //     setNewComment(newComment)
  //   },
  //   [newComment]
  // )
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="comment-form">
        <input
          type="text"
          placeholder="Ecrivez un commentaire ici !"
          className="content_input"
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
          className="comment-button"
          type="image"
          src="./images/send.png"
          alt="send"
        />
      </form>
    </div>
  )
}

export default CommentForm
