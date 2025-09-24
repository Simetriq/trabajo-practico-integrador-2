import { Schema, model } from "mongoose";
import { ArticleModel } from "./article.model.js";

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

TagSchema.pre("findOneAndDelete", async function (next) {
  const filter = this.getQuery();

  const tag = await this.model.findOne(filter);
  if (tag) {
    await ArticleModel.deleteMany(
      { tags: tag._id },
      { $pull: { tags: tag._id } }
    );
  }

  next();
});

export const TagModel = model("Tag", TagSchema);
