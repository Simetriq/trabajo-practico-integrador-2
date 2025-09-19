import { Schema } from "mongoose";

const CommentSchema = new Schema(
  {
    content: { type: String, minlength: 5, maxlength: 500 },
    author: { type: Schema.Types.ObjectId, ref: "User", require: true },
    article: { type: Schema.Types.ObjectId, ref: "Article" },
  },
  { timestamps: true }
);
export const CommentModel = model("Comment", CommentSchema);
