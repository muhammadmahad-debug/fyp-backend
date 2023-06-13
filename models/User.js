import { Schema, model } from "mongoose";
// import uniqueValidator from "mongoose-unique-validator";

const userSchema = model(
  "User",
  new Schema({
    email: { type: String,  unique: true },
    password: { type: String, minLength: 6 },
    role: { type: String,  default: "Admin" },
    name: { type: String,  },
    firebaseId: { type: String,  }
  })
);

export default userSchema;
