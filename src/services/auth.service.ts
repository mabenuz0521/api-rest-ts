import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

export const registerNewUser = async ({ email, password, name }: User) => {
  const checkis = await UserModel.findOne({ email });
  if (checkis) return "ALREADY_USER";
  const passHash = await encrypt(password);
  const registerNewUser = await UserModel.create({
    email,
    password: passHash,
    name,
  });
  return registerNewUser;
};

export const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email });
  if (!checkIs) return "EMAIL_NOT_FOUND";

  const passwordHash = checkIs.password;
  const isCorrect = await verified(password, passwordHash);
  if (!isCorrect) return "CREADENTIAL_INCORRECT";
  const token = await generateToken({email: checkIs.email});
  const data = {
    token,
    id: checkIs.id,
    name: checkIs.name,
    email: checkIs.email,
  };
  return data;
};
