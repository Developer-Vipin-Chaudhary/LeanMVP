import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

require("dotenv").config();

let { JWTSECRET } = process.env;
interface AuthRequest extends Request {
  userId?: string;
}

export const auth = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Access denied" });
  }
  try {
    if (JWTSECRET) {
      const decoded = jwt.verify(token, JWTSECRET) as { userId: string };
      req.userId = decoded.userId;
      next();
    }
  } catch (error) {
    res.status(400).json({ error: "Invalid token" });
  }
};
