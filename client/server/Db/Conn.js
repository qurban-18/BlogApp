import mongoose from "mongoose";
const Connection_Url = "";

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
