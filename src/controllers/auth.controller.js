import { comparePassword } from "../helpers/bcrypt.helper.js";
import { generateToken, verifyToken } from "../helpers/jwt.helper.js";
import { UserModel } from "../models/user.model.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email: email });

    const isAuthenticated = await comparePassword(password, user.password);

    if (!isAuthenticated || !user) {
      throw new Error("Las credenciales son incorrectas");
    }

    const token = generateToken(user);

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60, // 1 hora
    });

    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "error interno del servidor" });
  }
};

export const logout = async (req, res) => {
  res.clearCookie("token");
  return {};
};

export const getPerfil = async (req, res) => {
  const { id } = req.cookie;
  try {
    const user = await UserModel.findById(req.user.id);
    if (!id) {
      return res.status(400).json({ msg: "No existe el perfil" });
    }
    return res.status(200).json({
      data: id,
      msg: "Perfil de usuario logeado",
      ok: true,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "error interno del servidor" });
  }
};
