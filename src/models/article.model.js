import { Schema } from "mongoose";

const articleSchema = new Schema(
  {
    title: { type: String, minlength: 3, maxlength: 200 },
    content: { type: String, minlength: 50 },
    excerpt: { type: String, maxlength: 500, require: false },
    status: {
      type: String,
      enum: ["published", "archived"],
      default: "published",
      author: { type: Schema.Types.ObjectId, ref: "User", require: true },
      tags: { type: Schema.Types.ObjectId, ref: "Tag" },
    },
  },
  { timestamps: true }
);
