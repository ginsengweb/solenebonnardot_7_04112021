import SecuredConnexion from "../components/Log/SecuredConnection"
import GetAllPosts from "../components/Posts/index"

const Posts = () => {
  SecuredConnexion()
  return (
    <div className="posts">
      <div className="posts-container">
        <GetAllPosts />
      </div>
    </div>
  )
}

export default Posts
