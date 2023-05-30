/* eslint-disable @typescript-eslint/no-unused-vars */
import { Schema, model, connect } from 'mongoose'
import { IUser } from './users.interface'

const userSchema = new Schema<IUser>(
  {
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
)

const User = model<IUser>('User', userSchema)

export default User
