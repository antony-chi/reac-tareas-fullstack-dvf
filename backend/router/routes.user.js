import { Router } from "express";
const router = Router();
import * as userCtl from "../controllers/users.controller.js";

router.post("/", userCtl.createUser);
router.post("/login", userCtl.loginUser);
router.get("/me", userCtl.misDatos);





export default router;
