import mongoose from "mongoose";
var Schema = mongoose.Schema;

var userSchema = new Schema({
  firstName: String,
  lastName: String,
  userName: {
      type : String,
      required : true
  },
  email: {
    type : String,
    required : true
},
  avatar: String
});

var UserModel = mongoose.model("User", userSchema);

export { UserModel };
