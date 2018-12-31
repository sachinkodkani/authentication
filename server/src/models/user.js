import mongoose from "mongoose";
var Schema = mongoose.Schema;

var userSchema = new Schema({
  firstName: String,
  lastName: String,
  userName: String,
  email: String,
  avatar: String
});

var UserModel = mongoose.model("User", userSchema);

export { UserModel };
