import express from "express";
import { database } from "./config/mongooseConfig";

const port = process.env.port || 4000;

//connection established to mongoDB
//develop error handling
var db = database();
var app = express();

app.listen(port, () => {
  console.log("Info : Server listening at port : " + port);
});
