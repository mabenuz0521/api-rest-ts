import { Router } from "express";
import { getItems } from "../controllers/order";
import { checkJWT } from "../middleware/sessions";

export const router = Router();


router.get('/', checkJWT ,getItems);

