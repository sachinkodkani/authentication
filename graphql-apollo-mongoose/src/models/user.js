import mongoose from "mongoose";
var Schema = mongoose.Schema;

var userSchema = new Schema({
  firstName: String,
  lastName: String,
  userName: {
      type : String,
      required : true
  },
  password: {
      type : String,
      required : true
  },
  email: {
    type : String,
    required : true
},
  level : String,
  avatar: String,
  isActive : Boolean
});

var UserModel = mongoose.model("user", userSchema);

export { UserModel };
