import { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      minlength: 3,
      maxlength: 20,
    },
    email: {
      type: String,
      unique: true,
      match: /.+\@.+\..+/,
    },
    password: {
      type: String,
      require: true,
    },
  },
  {
    profile: {
      firstName: {
        type: String,
        minlength: 2,
        maxlength: 50,
      },
      lastName: {
        type: String,
        minlength: 2,
        maxlength: 50,
      },
      biography: {
        type: String,
        maxlength: 500,
        required: false,
      },
      avatarUrl: {
        type: String,
        match: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
        required: false,
      },
      birthDate: { type: Date, required: false },
    },
  },
  { timestamps: true }
);
