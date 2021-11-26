import React, {useState, useEffect} from "react"
import axios from "axios"
import Card from "../components/PostCard"

const GetAllPosts = () => {
  const [data, setData] = useState([])
  useEffect(()=>{
  axios({
    method: "GET",
    url: `http://localhost:4200/api/posts/`,
  })
    .then(res => {
      setData(res.data)
    //   if (res.data.errors) {
    //     text.innerHTML = res.data.errors
    //   } else {
    //     text.innerHTML = data
    //   }
    // })
    // .catch(err => {
      console.log(data)
    })
  }, [])
  return( 
  <div className="posts">
    <ul className="posts-list">
      {data.map((post) => (
        <Card post={post} key="post.name" />
      ))}
    </ul>
  </div>
  )}

export default GetAllPosts
