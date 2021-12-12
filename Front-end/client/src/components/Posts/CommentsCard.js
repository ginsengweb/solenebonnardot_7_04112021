import axios from "axios"
import {useEffect, useState} from "react"

const CommentsCard = props => {
  const {comments} = props
  const [showDeleteIcon, setShowDeleteIcon] = useState(false)
  let userInfo = JSON.parse(localStorage.getItem("userInfo"))
  let users_id = userInfo.id
  let users_admin = userInfo.admin
  // console.log(users_admin)
  useEffect(() => {
    if (comments.users_id === users_id || users_admin === 1) {
      setShowDeleteIcon(true)
    }
  }, [users_id, comments.users_id, users_admin])
  const handleDelete = () => {
    console.log(comments.id)
    axios({
      method: "DELETE",
      url: "http://localhost:4200/api/comment",
      headers: {
        "x-access-token": localStorage.getItem("Token"),
      },
      data: {
        id: comments.id,
        user_id: users_id,
        admin: users_admin,
        post_user_id: comments.users_id,
      },
    })
      .then(res => {
        console.log(res.data)
        props.DeletePost(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <li className="comments-card">
      <div className="comments-card-data">
        <div className="comments-card-data-header">
          <h3>
            Votre collègue {comments.users.prenom} {comments.users.nom} a
            commenté le {comments.createdAt}
          </h3>
          {showDeleteIcon && (
            <button
              className="comment-card-crud"
              onClick={() => {
                if (window.confirm("Voulez-vous supprimer ce commentaire ?")) {
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
        <div className="comments-card-data-container">
          <p className="comments-card-data-content">{comments.content}</p>
        </div>
      </div>
    </li>
  )
}

export default CommentsCard
