import React, {useState, useEffect} from "react"
import axios from "axios"
import PostsCard from "../Posts/PostsCard"
import PostForm from "./PostForm"

const GetAllPosts = () => {
  const [data, setData] = useState([])

  const Token = localStorage.getItem("Token")

  const userId = JSON.parse(localStorage.getItem("userInfo")).id

  useEffect(() => {
    axios
      .get("http://localhost:4200/api/posts/", {
        headers: {
          "x-access-token": Token,
        },
        params: {userId: userId},
      })
      .then(res => {
        console.log(res.user)
        setData(res.data)
      })
  }, [Token, setData, userId])
  const prenomUser = JSON.parse(localStorage.getItem("userInfo")).prenom
  const addnewpost = () => {
    window.location.reload()
  }

  return (
    <div className="posts">
      <div className="welcome">
        <h1>Bienvenue {prenomUser}</h1>
      </div>
      <div>
        <PostForm addPost={addnewpost}></PostForm>
      </div>
      <ul className="posts-list">
        {data.map((posts, i) => (
          <PostsCard
            className="post-card"
            post={posts}
            key={i}
            addPost={addnewpost}
          />
        ))}
      </ul>
    </div>
  )
}

export default GetAllPosts
