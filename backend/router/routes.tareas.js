import { Router} from "express";
const router = Router();
import * as tareasCtl from "../controllers/tarea.controller.js"

router.get("/", tareasCtl.getTareas)

router.post("/", tareasCtl.createTareaNueva);

router.put("/:id", tareasCtl.UpdateTareaEditar);

router.delete("/:id", tareasCtl.deleteTarea);

export default router;