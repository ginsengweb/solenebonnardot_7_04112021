import axios from "axios"

const DeleteProfil = () => {
  const handleDelete = () => {
    let userInfo = JSON.parse(localStorage.getItem("userInfo"))
    let userId = userInfo.id
    axios({
      method: "DELETE",
      url: "http://localhost:4200/api/user",
      headers: {
        "x-access-token": localStorage.getItem("Token"),
      },
      params: {userId},
      data: {
        id: userId,
      },
    })
      .then(res => {
        localStorage.clear()
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <button
      className="delete-user"
      onClick={() => {
        if (
          window.confirm(
            "Voulez-vous vraiment supprimer votre profil ainsi que toutes vos données ? Tous vos posts, commentaires et informations personnelles disparaîtront."
          )
        ) {
          handleDelete()
        }
      }}
    >
      <img
        src={"/images/delete.png"}
        alt="delete-comment"
        className="delete-img"
      />
    </button>
  )
}

export default DeleteProfil
