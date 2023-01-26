import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth.service";

export const registerCtrl = async ({ body }: Request, res: Response) => {
  const responseUser = await registerNewUser(body);
  res.send(responseUser);
};

export const loginCtrl = async ({ body }: Request, res: Response) => {
  const responseUser = await loginUser(body);
  if (responseUser === "CREADENTIAL_INCORRECT" || responseUser === "EMAIL_NOT_FOUND") {
    res.status(403);
    res.send(responseUser);
  } else {
    res.send(responseUser);
  }
};
