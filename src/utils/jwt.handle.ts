import { sign, verify } from "jsonwebtoken";
import { TokenData } from "../interfaces/user.interface";

const JWT_SECRET = process.env.JWT_SECRET || "defualt0101";

const generateToken = async (user: TokenData) => {
  const jwt = sign(user, JWT_SECRET, { expiresIn: "1h" });
  return jwt;
};

const verifyToken = async () => {};

export { generateToken, verifyToken };
