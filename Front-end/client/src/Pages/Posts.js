import SecuredConnexion from "../components/Log/SecuredConnection"
import GetAllPosts from "../components/Posts/index"
import Nav from "../components/Navigation"

const Posts = () => {
  return (
    <div>
      <Nav />
      <SecuredConnexion>
        <div className="posts">
          <div className="posts-container">
            <GetAllPosts />
          </div>
        </div>
      </SecuredConnexion>
    </div>
  )
}

export default Posts
