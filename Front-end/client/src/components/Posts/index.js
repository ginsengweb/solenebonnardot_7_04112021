import React, {useState, useEffect} from "react"
import axios from "axios"
import Card from "../Posts/PostCard"

const GetAllPosts = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:4200/api/posts/`,
    }).then(res => {
      setData(res.data)
      // .catch(err => {
      console.log(data)
    })
  }, [])
  return (
    <div className="posts">
      <ul className="posts-list">
        {data.map(post => (
          <Card post={post} key="post.name" />
        ))}
      </ul>
    </div>
  )
}

export default GetAllPosts
