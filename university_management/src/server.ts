import mongoose from "mongoose";
import app from "./app";
const port: number = 5000;

async function db() {
  try {
    await mongoose.connect(
      "mongodb+srv://university:1234567890@cluster0.hurbec0.mongodb.net"
    );
    console.log("Connection to DB success");
  } catch (error) {
    console.log(error.message);
  }
}

app.listen(port, () => {
  db();
  console.log(`Server is listening on port ${port}`);
});
