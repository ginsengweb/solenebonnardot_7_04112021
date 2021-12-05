import React, {useState, useEffect} from "react"
import axios, {Axios} from "axios"
import Card from "../Posts/PostCard"
import PostForm from "./PostForm"

const GetAllPosts = () => {
  const [data, setData] = useState([])
  const Token = localStorage.getItem("Token")
  console.log(Token)
  useEffect(() => {
    axios
      .get("http://localhost:4200/api/posts", {
        headers: {
          "x-access-token": Token,
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
      <div>
        <PostForm></PostForm>
      </div>
      <ul className="posts-list">
        {data.map(posts => (
          <Card className="post-card" post={posts} key="posts.name" />
        ))}
      </ul>
    </div>
  )
}

export default GetAllPosts
