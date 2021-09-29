import {} from "dotenv/config.js";
import mongoose from "mongoose";
const Connection_Url = process.env.DB_URI;

const db = mongoose
  .connect(Connection_Url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("db is connected");
  })
  .catch((error) => {
    console.log(error);
  });

export default db;
