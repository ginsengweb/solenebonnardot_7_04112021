// import React, {useState} from "react"
import axios from "axios"
// import

const getAllPosts = () => {
  const text_content = document.querySelector("textcontent")
  axios({
    method: "get",
    url: `http://localhost:4200/api/posts`,
    withCredentials: true,
    data: {
      text_content,
    },
  })
    .then(res => {
      console.log(res)
      if (res.data.errors) {
        text_content.innerHTML = res.data.errors.text_content
      } else {
        text_content.innerHTML = text_content
      }
    })
    .catch(err => {
      console.log(err)
    })

  return <div className="textcontent">blabla</div>
}

export default getAllPosts
