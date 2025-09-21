import { UserModel } from "../models/User.model.js";

export const createUser = async (req, res) => {
  try {
    const { username, email, password, profile } = req.body;
    const newUser = await UserModel.create({
      username,
      email,
      password,
      profile,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: "error interno del servidor" });
  }
};
