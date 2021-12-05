import React from "react"

const Card = props => {
  // destructuring (pour ne pas appeler props.country à chaque fois)
  const {post} = props

  return (
    <li className="card">
      <div className="data-header">
        <h3>
          Votre collègue {post.users.prenom} {post.users.nom} a publié le{" "}
          {post.createdAt}
        </h3>
      </div>
      <div className="data-container">
        <p className="textcontent">{post.text_content}</p>
        {/* <img src={post.media_content} /> */}
      </div>
    </li>
  )
}

export default Card
