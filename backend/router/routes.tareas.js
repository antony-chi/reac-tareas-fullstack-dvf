import { Router} from "express";
const router = Router();
import * as tareasCtl from "../controllers/tarea.controller.js"
import { protect } from "../middleware/authMiddleware.js";

router.get("/", protect, tareasCtl.getTareas)

router.post("/", protect, tareasCtl.createTareaNueva);

router.put("/:id", protect, tareasCtl.UpdateTareaEditar);

router.delete("/:id", protect,  tareasCtl.deleteTarea);

export default router;