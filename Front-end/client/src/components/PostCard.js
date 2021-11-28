import React from "react"
import "../styles/main.css"

const Card = props => {
  // destructuring (pour ne pas appeler props.country à chaque fois)
  const {post} = props

  return (
    // <div>Card</div>
    <li class="card">
      {/* <div className="data-header">
            <ul>
                {/* <li>{post.author}</li> */}
      {/* <li>{posts.updatedAt}</li> */}
      {/* </ul> */}
      {/* </div> */}
      <div class="data-container">
        <p class="textcontent">{post.text_content}</p>
        {/* <img src={posts.media_content}/> */}
      </div>
    </li>
  )
}

export default Card
