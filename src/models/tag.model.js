import { Schema, model } from "mongoose";

const TagSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      minlength: 2,
      trim: true,
      maxlength: 30,
      trim: true,
    },
    description: { type: String, require: false, maxlength: 200 },
    article: [
      {
        type: Schema.Types.ObjectId,
        ref: "Article",
      },
    ],
  },

  { timestamps: true }
);

export const TagModel = model("Tag", TagSchema);
