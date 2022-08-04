import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  links: {
    type: Array,
    required: true,
  },
  avatars: {
    type: Number,
    required: true,
  },
  background: {
    type: String,
    required: true,
  },
  opacity: {
    type: String,
    required: true,
  },
  template: {
    type: String,
    required: true,
  },
  brightness: {
    type: Number,
    required: true,
  },
  colorList: {
    type: Array,
    required: true,
  },
});

const User = models.User || model("User", userSchema);

export default User;
