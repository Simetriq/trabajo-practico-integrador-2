import { Schema, model } from "mongoose";

const ArticleSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "El título es requerido"],
      minlength: [3, "El título debe tener al menos 3 caracteres"],
      maxlength: [200, "El título no puede exceder los 200 caracteres"],
      trim: true,
    },
    content: {
      type: String,
      required: [true, "El contenido es requerido"],
      minlength: [50, "El contenido debe tener al menos 50 caracteres"],
    },
    excerpt: {
      type: String,
      maxlength: [500, "El extracto no puede exceder los 500 caracteres"],
      default: "",
    },
    status: {
      type: String,
      enum: {
        values: ["published", "archived"],
        message: "El estado debe ser 'published' o 'archived'",
      },
      default: "published",
    },
    //&  author al mismo nivel (relación 1:N)
    //& --------------------------------[ User ---> Article ]-------------------------------------------------------------
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "El autor es requerido"],
    },
    //&  tags como array (relación N:M)
    //&-------------------------[ Article <--> Tag ] ------------------------------------------------
    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: "Tag",
      },
    ],
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export const ArticleModel = model("Article", ArticleSchema);
