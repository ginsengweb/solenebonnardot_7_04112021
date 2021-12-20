import axios from "axios"
import React, {useState, useEffect} from "react"
import CommentForm from "./CommentForm"
import CommentsCard from "./CommentsCard"

//  DAYJS
import dayjs from "dayjs"
require("dayjs/locale/fr")
const relativeTime = require("dayjs/plugin/relativeTime")
dayjs.extend(relativeTime)

const PostsCard = props => {
  const {post} = props

  const [showDeleteIcon, setShowDeleteIcon] = useState(false)
  const [dataComment, setDataComment] = useState([])
  const [showComments, setShowComments] = useState(false)

  const comments = post.comments
  useEffect(() => {
    setDataComment(comments)
    console.log("useEffect setDataComments postCard l.22 lancé")
  }, [comments])

  // Récupéraiton infos user storage
  let userInfo = JSON.parse(localStorage.getItem("userInfo"))
  let users_id = userInfo.id
  let users_admin = userInfo.admin

  // Afficher l'icône delete
  useEffect(() => {
    if (post.users_id === users_id || users_admin === 1) {
      setShowDeleteIcon(true)
    }
  }, [users_id, post.users_id, users_admin])

  // Delete
  const handleDelete = () => {
    axios({
      method: "DELETE",
      url: "http://localhost:4200/api/posts",
      headers: {
        "x-access-token": localStorage.getItem("Token"),
      },
      data: {
        id: post.id,
        users_id: users_id,
        admin: users_admin,
        post_user_id: post.users_id,
      },
    })
      .then(res => {
        props.addPost(res.data.post)
      })
      .catch(err => {
        console.log(err)
      })
  }
  const addNewComment = newComment => {
    console.log(newComment)
    setDataComment(dataComment.concat(newComment))
  }
  const deleteComment = commentToDelete => {
    console.log(commentToDelete)
    console.log(dataComment)
    let index = dataComment.indexOf(commentToDelete)
    console.log("index = ", index)
    setDataComment(dataComment.splice(index, 1))

    console.log(dataComment)
    console.log(comments)
  }
  return (
    <li className="card">
      <div className="data">
        <div className="data-header">
          <h3>
            Votre collègue {post.users.prenom} {post.users.nom} a publié{" "}
            {dayjs(post.createdAt).locale("fr").fromNow()}
          </h3>
          {showDeleteIcon && (
            <button
              className="comment-card-crud delete-button"
              onClick={() => {
                if (window.confirm("Voulez-vous supprimer ce post ?")) {
                  handleDelete()
                }
              }}
            >
              <img
                src={"/images/delete.png"}
                alt="delete-comment"
                className="delete-img"
              />
            </button>
          )}
        </div>
        <div className="data-container">
          <p className="textcontent">{post.text_content}</p>
          {post.imageUrl && (
            <img
              src={post.imageUrl}
              alt="post-imageurl"
              className="post-image"
            />
          )}
        </div>
        <div className="data-footer">
          <div className="comment-icone">
            <img
              onClick={() => setShowComments(!showComments)}
              src="./images/chat.png"
              alt="chat"
              className="button"
            />
            <CommentForm postId={post.id} newComment={addNewComment} />
          </div>
        </div>
        <div className="comments">
          <ul className="comments-list">
            {showComments &&
              dataComment.map(comments => (
                <CommentsCard
                  className="comments-card"
                  comments={comments}
                  key="comments.name"
                  commentToDelete={deleteComment}
                />
              ))}
          </ul>
        </div>
      </div>
    </li>
  )
}

export default PostsCard
