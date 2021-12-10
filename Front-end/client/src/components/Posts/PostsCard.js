import axios from "axios"
import React, {useState, useEffect} from "react"
import CommentForm from "./CommentForm"
import CommentsCard from "./CommentsCard"
// Permet d'afficher le temps relatif par rapport à la date actuelle, et en français

const PostsCard = props => {
  const {post} = props
  const [showDeleteIcon, setShowDeleteIcon] = useState(false)
  const [data, setData] = useState([])
  const [showComments, setShowComments] = useState(false)
  const comments = post.comments
  console.log(comments)
  useEffect(() => {
    setData(comments)
  }, [])

  let userInfo = JSON.parse(localStorage.getItem("userInfo"))
  let users_id = userInfo.id
  let users_admin = userInfo.admin
  console.log(users_admin)
  useEffect(() => {
    if (post.users_id === users_id || users_admin === 1) {
      setShowDeleteIcon(true)
    }
  }, [users_id, post.users_id, users_admin])
  const handleDelete = () => {
    console.log(post.id)
    axios({
      method: "DELETE",
      url: "http://localhost:4200/api/posts",
      headers: {
        "x-access-token": localStorage.getItem("Token"),
      },
      data: {
        id: post.id,
        user_id: users_id,
        admin: users_admin,
        post_user_id: post.users_id,
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
    <li className="card">
      <div className="data">
        <div className="data-header">
          <h3>
            Votre collègue {post.users.prenom} {post.users.nom} a publié le{" "}
            {post.createdAt}
          </h3>
          {showDeleteIcon && (
            <button
              className="comment-card-crud"
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
          {/* <img src={post.media_content} /> */}
        </div>
        <div className="data-footer">
          <div className="comment-icone">
            <img
              onClick={() => setShowComments(!showComments)}
              src="./images/chat.png"
              alt="chat"
            />
            {console.log(post.id)}
            <CommentForm postId={post.id} />
          </div>
        </div>
        <div className="comments">
          <ul className="comments-list">
            {showComments &&
              data.map(comments => (
                <CommentsCard
                  className="comments-card"
                  comments={comments}
                  key="comments.name"
                />
              ))}
          </ul>
        </div>
      </div>
    </li>
  )
}

export default PostsCard
