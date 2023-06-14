import { Router } from "express";
const router = Router();
import * as userCtl from "../controllers/users.controller.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/", userCtl.createUser);
router.post("/login", userCtl.loginUser);
router.get("/me",protect, userCtl.misDatos);





export default router;
