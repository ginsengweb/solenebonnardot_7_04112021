import * as React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom"
import Accueil from "../src/Pages/Accueil"
import Profil from "./Pages/Profil"
import Posts from "./Pages/Posts"
import "./styles/main.css"

function App() {
  const isAuth = () => localStorage.getItem("Token") != null
  const Navigate = useNavigate()
  const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
      {...rest}
      render={props => {
        return isAuth() ? <Component {...props} /> : Navigate("/")
      }}
    />
  )

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/profil" element={<Profil />} />
          <PrivateRoute path="/posts" element={<Posts />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App
