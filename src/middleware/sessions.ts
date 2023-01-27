import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../utils/jwt.handle";

interface RequestExtends extends Request {
    user?: string  | JwtPayload
}

export const checkJWT = async (req: RequestExtends, res: Response, next: NextFunction) => {
    try {
       const jwtByUser =  req.headers.authorization || '';
       const jwt = jwtByUser.split(' ').pop() // me toma el jwt
       const isUser = await verifyToken(`${jwt}`)
       if(isUser) {
            req.user = isUser; 
            next()      
       } 
    } catch (error) {
        res.status(400)
        res.send("SESSION_NOT_VALIDATE");
    }
}