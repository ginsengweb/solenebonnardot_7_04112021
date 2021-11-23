const getOneUser = async (req, res) => {
  let id = req.params.id
  let user = await User.findOne({
    where: {id: id},
  })
  res.status(200).send(user)
}

const updateUser = async (req, res) => {
  let id = req.params.id
  const user = await User.update(req.body, {where: {id: id}})
  res.status(200).send(user)
}

const deleteUser = async (req, res) => {
  let id = req.params.id
  await User.destroy({where: {id: id}})
  res.status(200).send("user deleted")
}

module.exports = {
  getOneUser,
  updateUser,
  deleteUser,
}
