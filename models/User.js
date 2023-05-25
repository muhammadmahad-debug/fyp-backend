import { Schema, model } from "mongoose";
// import uniqueValidator from "mongoose-unique-validator";

const userSchema = model(
  "User",
  new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minLength: 6 },
    role: { type: String, required: true, default: "Admin" },
    name: { type: String, required: true },
  })
);

export default userSchema;
