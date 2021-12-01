import React from "react"

const Card = props => {
  // destructuring (pour ne pas appeler props.country à chaque fois)
  const {post} = props

  return (
    // <div>Card</div>
    <li className="card">
      {/* <div className="data-header">
            <ul>
                {/* <li>{post.author}</li> */}
      <li>{post.updatedAt}</li>
      {/* </ul> */}
      {/* </div> */}
      <div className="data-container">
        <p className="textcontent">{post.text_content}</p>
        {/* <img src={posts.media_content}/> */}
      </div>
    </li>
  )
}

export default Card
