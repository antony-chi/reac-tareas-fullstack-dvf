import { Router} from "express";
const router = Router();
import * as tareasCtl from "../controllers/tarea.controller.js"

router.get("/", tareasCtl.getTareas)

router.post("/crearTarea", tareasCtl.postTareaNueva);

router.put("/:id", tareasCtl.UpdateTareaEditar);

router.delete("/:id", tareasCtl.deleteTarea);

export default router;