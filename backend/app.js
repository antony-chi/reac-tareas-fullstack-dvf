import express from "express";
const app = express();
//---import router ---
import  routerTareas from "./router/routes.tareas.js";

//---global setting --
app.use(express.json());
app.use("/api/",routerTareas)

export default app;



