import React, {useState, useEffect} from "react"
import axios, {Axios} from "axios"
import PostsCard from "../Posts/PostsCard"
import PostForm from "./PostForm"

const GetAllPosts = () => {
  const [data, setData] = useState([])
  const Token = localStorage.getItem("Token")
  useEffect(() => {
    axios
      .get("http://localhost:4200/api/posts", {
        headers: {
          "x-access-token": Token,
        },
      })
      .then(res => {
        setData(res.data)
      })
  }, [Token, setData])
  const prenomUser = JSON.parse(localStorage.getItem("userInfo")).prenom
  const addnewpost = post => {
    window.location.reload()
  }

  return (
    <div className="posts">
      <div className="welcome">
        <h1>Bienvenue {prenomUser}</h1>
      </div>
      <div>
        <PostForm addPost={addnewpost}></PostForm>
        {/* envoeyr en props une fonction que jedéfini ici et qui ajoute le nouveau post à la liste des ancienss posts */}
      </div>
      <ul className="posts-list">
        {data.map(posts => (
          <PostsCard className="post-card" post={posts} key="posts.name" />
        ))}
      </ul>
    </div>
  )
}

export default GetAllPosts
