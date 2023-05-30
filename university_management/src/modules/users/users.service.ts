/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request } from 'express'
import User from './users.schema'
import { IUser } from './users.interface'
import config from '../../config'
import { generateUserId } from './users.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  //auto generated id
  const id = await generateUserId()
  user.id = id
  // default password
  if (!user.password) {
    user.password = config.default_user_pass as string
  }
  const users = await User.create(user)
  if (!users) {
    throw new Error('Failed to create')
  }

  return users
}

export default { createUser }
