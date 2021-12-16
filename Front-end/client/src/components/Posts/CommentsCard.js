import axios from "axios"
import {useEffect, useState} from "react"
import dayjs from "dayjs"

//  DAYJS
require("dayjs/locale/fr")
const relativeTime = require("dayjs/plugin/relativeTime")
dayjs.extend(relativeTime)

const CommentsCard = props => {
  const {comments} = props

  const [showDeleteIcon, setShowDeleteIcon] = useState(false)

  let userInfo = JSON.parse(localStorage.getItem("userInfo"))
  let users_id = userInfo.id
  let users_admin = userInfo.admin

  useEffect(() => {
    if (comments.users_id === users_id || users_admin === 1) {
      setShowDeleteIcon(true)
    }
  }, [users_id, comments.users_id, users_admin])

  const handleDelete = () => {
    axios({
      method: "DELETE",
      url: "http://localhost:4200/api/comment",
      headers: {
        "x-access-token": localStorage.getItem("Token"),
      },
      params: {userId: users_id},
      data: {
        users_id,
        id: comments.id,
        admin: users_admin,
      },
    })
      .then(res => {
        console.log(comments)
        props.commentToDelete(comments)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <li className="comments-card">
      <div className="comments-card-data">
        <div className="comments-card-data-header">
          {comments.users !== undefined && (
            <h3>
              Votre collègue {comments.users.prenom} {comments.users.nom} a
              commenté {dayjs(comments.createdAt).locale("fr").fromNow()}
            </h3>
          )}
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
