import React from "react"
import {NavLink} from "react-router-dom"
import SecuredConnexion from "./Log/SecuredConnection"

const Nav = () => {
  return (
    <nav>
      <div className="nav">
        <div className="nav-logo">
          <NavLink exact to="/" className="nav-logo-link">
            <img
              src={
                "/images/Groupomania_Logos/icon-left-font-monochrome-black.svg"
              }
              alt="logo"
              className="nav-logo-link-img"
            />
            <h1 className="nav-logo-link-community">Community</h1>
          </NavLink>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink exact to="/posts">
              <img
                src={"/images/messager.png"}
                alt="accueil"
                className="nav-links-img button"
              />
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink exact to="/profil">
              <img
                src={"/images/profil.png"}
                alt="accueil"
                className="nav-links-img button"
              />
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/">
              <img
                src={"/images/logout.png"}
                alt="accueil"
                className="nav-links-img button"
              />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
