import React, {useState, useEffect} from "react"
import axios from "axios"
import Card from "../Posts/PostCard"
import SecuredConnexion from "../Log/SecuredConnection"
import PostForm from "./PostForm"

const GetAllPosts = () => {
  SecuredConnexion()
  const [data, setData] = useState([])
  const SECRET_TOKEN = localStorage.getItem("Token")
  console.log(SECRET_TOKEN)
  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:4200/api/posts/`,
      headers: {
        authorization: SECRET_TOKEN,
      },
    }).then(res => {
      setData(res.data)
    })
  }, [])
  return (
    // <div className="post-form">
    //   PostForm()
    // </div>
    <div className="posts">
      <ul className="posts-list">
        {data.map(posts => (
          <Card post={posts} key="posts.name" />
        ))}
      </ul>
    </div>
  )
}

export default GetAllPosts
