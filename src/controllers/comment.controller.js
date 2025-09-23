import { CommentModel } from "../models/comment.model.js";

export const createComment = async (req, res) => {
  const { content, author, article } = req.body;
  try {
    const newComment = await CommentModel.create({
      content,
      author,
      article,
    });
    return res.status(200).json({
      data: newComment,
      ok: true,
      msg: "Se creo un comentario exitosamente",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};
