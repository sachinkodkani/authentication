import { configuration } from "./config";
import mongoose from "mongoose";

const env = process.env.NODE_ENV || "development";

function database() {
  mongoose.Promise = global.Promise;
  var db = mongoose.connect(configuration[env].db);

  mongoose.connection
    .on("error", function() {
      console.log("Error : Could not connect to MongoDB");
    })
    .on("open", function() {
      console.log("Info : Connection established to MongoDB");
    });

  return db;
}

export { database };
