import mongoose from "mongoose";

const DB_HOST =
  "mongodb+srv://admin:SpacejamTron86@cluster0.2pscb.mongodb.net/cats?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connect success"))
  .catch(error => console.log(error.message));
