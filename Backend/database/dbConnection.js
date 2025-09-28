import mongoose from "mongoose";
export const dbConnection = () => {
  mongoose.connect(process.env.MONGO_URI, {
    dbName: "RESTAURANT"
  }).then(() => {
    console.log("connected");
  }).catch(err => {
    console.log(`error ${err}`)
  });
};
