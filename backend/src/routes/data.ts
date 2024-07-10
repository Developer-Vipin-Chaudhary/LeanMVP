import { Router } from "express";
import { getdata } from "../controller/data";
import { auth } from "../middleware/auth";

const router = Router();

router.get("/data", auth, getdata);

export default router;
