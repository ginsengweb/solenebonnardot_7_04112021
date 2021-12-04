import React, {useState, useEffect} from "react"
import axios, {Axios} from "axios"
import Card from "../Posts/PostCard"
import SecuredConnexion from "../Log/SecuredConnection"
import PostForm from "./PostForm"

const GetAllPosts = () => {
  SecuredConnexion()
  const [data, setData] = useState([])
  const SECRET_TOKEN = localStorage.getItem("Token")
  console.log(SECRET_TOKEN)
  useEffect(() => {
    axios
      .get("http://localhost:4200/api/posts", {
        headers: {
          "x-access-token": localStorage.getItem("Token"),
        },
      })
      .then(res => {
        setData(res.data)
        console.log(res.data)
      })
  }, [])
  const prenomUser = JSON.parse(localStorage.getItem("userInfo")).prenom

  return (
    <div className="posts">
      <div className="welcome">
        <h1>Bienvenue {prenomUser}</h1>
      </div>
      <div className="post-form">
        <PostForm></PostForm>
      </div>
      <ul className="posts-list">
        {data.map(posts => (
          <Card post={posts} key="posts.name" />
        ))}
      </ul>
    </div>
  )
}

export default GetAllPosts
