import express, { Application, Request, Response } from 'express'
import cors from 'cors'
// import userRoutes from "./app/modules/user/user.route";
const app: Application = express()

app.use(cors())
//parse data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Common Route
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Api is Working' })
})

//Application Routes
// app.use("/api/v1/user", userRoutes);

//Error Handle
app.use('/*', (req: Request, res: Response) => {
  res.status(400).json({ message: "This Route Doesn't exist" })
})
export default app
