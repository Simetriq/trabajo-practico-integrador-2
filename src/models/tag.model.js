import { Schema } from "mongoose";

const TagSchema = new Schema(
  {
    name: { type: String, minlength: 2, maxlength: 30, trim: true },
    description: { type: String, require: false, maxlength: 200 },
  },
  { timestamps: true }
);
