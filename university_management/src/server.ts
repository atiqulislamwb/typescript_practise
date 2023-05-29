import mongoose from "mongoose";
import app from "./app";
const port = 5000;
import config from "./config/index";
async function db() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Connection to DB success");
  } catch (error: any) {
    console.log(error.message);
  }
}

app.listen(port, () => {
  db();
  console.log(`Server is listening on port ${port}`);
});
