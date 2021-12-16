function SecuredConnexion({children}) {
  const isAuth = () => localStorage.getItem("Token") != null
  return isAuth() ? (
    <div>{children}</div>
  ) : (
    <div className="securedConnection">
      <h1>
        Vous devez être connecté pour entrer dans votre Communauté Groupomania,
        retournez à l'accueil !
      </h1>
    </div>
  )
}

export default SecuredConnexion
