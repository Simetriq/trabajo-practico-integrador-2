import { comparePassword } from "../helpers/bcrypt.helper.js";
import { generateToken } from "../helpers/jwt.helper.js";
import { UserModel } from "../models/user.model.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);

  try {
    const user = await UserModel.findOne({ email: email });

    console.log(user);

    const isAuthenticated = await comparePassword(password, user.password);

    if (!isAuthenticated || !user) {
      throw new Error("Las credenciales son incorrectas");
    }

    const token = generateToken(user);

    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "error interno del servidor" });
  }
};
