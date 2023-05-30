import User from './users.schema'

//let lastUserId = 0
export const lastUserId = async () => {
  const lastUserId = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean()
  return lastUserId?.id
}

export const generateUserId = async () => {
  const currentId = (await lastUserId()) || (0).toString().padStart(5, '0')
  const incrementId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  return incrementId

  //   lastUserId++
  //   return String(lastUserId).padStart(5, '0')
}
