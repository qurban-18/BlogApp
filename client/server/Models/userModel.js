import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  ConfirmPassword: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  Token: {
    type: String,
  },
});
userSchema.pre("save", async function (next) {
  if (this.isModified("Password")) {
    this.Password = await bcrypt.hash(this.Password, 12);
    this.ConfirmPassword = await bcrypt.hash(this.ConfirmPassword, 12);
  }
  next();
});

const userModel = mongoose.model("users", userSchema);

export default userModel;
