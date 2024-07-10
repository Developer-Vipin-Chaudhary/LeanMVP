import { Router } from "express";
import { getdata, getUser } from "../controller/data";
import { auth } from "../middleware/auth";

const router = Router();

router.get("/data", auth, getdata);
router.get("/user", auth, getUser);

export default router;
