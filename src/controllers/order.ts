import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { handleHttp } from "../utils/error.handle";

// export const getItem = (_req: Request, res: Response) => {
//   try {
//   } catch (e) {
//     handleHttp(res, "ERROR_GET_BLOG");
//   }
// };
interface RequestExtends extends Request {
  user?: string  | JwtPayload
}


export const getItems = (req: RequestExtends, res: Response) => {
  try {
    res.send({
      data:"Esto solo lo ven las personas que tienen una sesio iniciada",
      user: req.user
    })
  } catch (e) {
    handleHttp(res, "ERROR_GET_ORDERS");
  }
};

